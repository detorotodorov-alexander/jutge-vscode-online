import * as vscode from "vscode"

import { Logger } from "@/loggers"
import { basename } from "@/lib/portable"
import {
    clearRuntimeDiagnostics,
    createDiagnostic,
    setRuntimeDiagnostics,
} from "@/services/runners/errors"
import type { LanguageRunner } from "@/services/runners/types"
import { showErrorOutput, webSetting } from "./output"
import { PYTHON_WORKER_SOURCE } from "./python-worker"
import yogiSourceRaw from "./yogi.py"

// yogi raises the recursion limit to 1e6, which overflows the WebAssembly stack
// and crashes the interpreter instead of raising RecursionError. Keep a sane value.
const yogiSource = yogiSourceRaw.replace(
    "sys.setrecursionlimit(1000000)",
    "sys.setrecursionlimit(max(sys.getrecursionlimit(), 2000))"
)

const DEFAULT_PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/"

type WorkerReply = {
    id: number
    ok: boolean
    stdout?: string
    stderr?: string
    status?: number
    error?: string
    fatal?: boolean
    version?: string
}

/**
 * Runs Python programs in the browser using Pyodide inside a dedicated Web Worker.
 * Supports reading input with `input()`, `sys.stdin` and `yogi` (the reading
 * library used by Jutge.org problems).
 */
export class WebPythonRunner extends Logger implements LanguageRunner {
    private worker: Worker | null = null
    private ready: Promise<void> | null = null
    private nextId = 1
    private pending = new Map<number, (reply: WorkerReply) => void>()

    getRunningDir(): string {
        return ""
    }

    private get baseUrl(): string {
        let url = webSetting<string>("web.pyodideUrl", DEFAULT_PYODIDE_URL)
        if (!url.endsWith("/")) {
            url += "/"
        }
        return url
    }

    private startWorker(): Worker {
        if (typeof Worker === "undefined") {
            throw new Error(
                "This browser does not allow extensions to start Web Workers, so Python cannot run locally."
            )
        }
        const blob = new Blob([PYTHON_WORKER_SOURCE], { type: "text/javascript" })
        const worker = new Worker(URL.createObjectURL(blob))
        worker.onmessage = (ev: MessageEvent<WorkerReply>) => {
            const resolve = this.pending.get(ev.data.id)
            if (resolve) {
                this.pending.delete(ev.data.id)
                resolve(ev.data)
            }
        }
        worker.onerror = (ev: ErrorEvent) => {
            this.log.error(`Python worker error: ${ev.message}`)
            this.failAll(ev.message || "Python worker crashed")
            this.kill()
        }
        return worker
    }

    private failAll(message: string) {
        for (const [id, resolve] of this.pending) {
            resolve({ id, ok: false, error: message })
        }
        this.pending.clear()
    }

    private kill() {
        this.worker?.terminate()
        this.worker = null
        this.ready = null
    }

    private request(msg: Record<string, unknown>, timeoutMs: number): Promise<WorkerReply> {
        if (!this.worker) {
            this.worker = this.startWorker()
        }
        const id = this.nextId++
        return new Promise<WorkerReply>((resolve) => {
            const timer = setTimeout(() => {
                if (this.pending.has(id)) {
                    this.pending.delete(id)
                    // The only way to stop a running Python program is to kill the worker
                    this.failAll("Python worker restarted")
                    this.kill()
                    resolve({ id, ok: false, error: "__timeout__" })
                }
            }, timeoutMs)
            this.pending.set(id, (reply) => {
                clearTimeout(timer)
                resolve(reply)
            })
            this.worker!.postMessage({ ...msg, id, base: this.baseUrl, yogi: yogiSource })
        })
    }

    private ensureLoaded(): Promise<void> {
        if (this.ready === null) {
            this.ready = vscode.window.withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: "Loading Python (Pyodide) in the browser…",
                },
                async () => {
                    const reply = await this.request({ type: "load" }, 120_000)
                    if (!reply.ok) {
                        this.kill()
                        const reason = reply.error === "__timeout__" ? "timed out" : reply.error
                        throw new Error(
                            `Could not load Pyodide from ${this.baseUrl}: ${reason}. ` +
                                `Check your connection or the 'jutge-vscode.web.pyodideUrl' setting.`
                        )
                    }
                    this.log.info(`Pyodide ${reply.version} loaded`)
                }
            ) as Promise<void>
        }
        return this.ready
    }

    async run(
        compiler: string | null,
        codeUri: vscode.Uri,
        input: string,
        document: vscode.TextDocument
    ): Promise<string> {
        await this.ensureLoaded()

        const filename = basename(codeUri.path) || "main.py"
        let code = document.getText()
        let stdin = input

        // "RunPython" problems: the testcase input is Python code appended to the program
        if (compiler === "RunPython") {
            code = code + "\n\n" + input
            stdin = ""
        }

        const timeoutMs = webSetting<number>("web.timeoutSeconds", 10) * 1000
        const reply = await this.request(
            { type: "run", code, input: stdin, filename },
            timeoutMs
        )

        if (!reply.ok) {
            if (reply.error === "__timeout__") {
                const msg = `Execution timed out after ${timeoutMs / 1000}s (infinite loop?). You can change 'jutge-vscode.web.timeoutSeconds'.`
                setRuntimeDiagnostics(document, [createDiagnostic(msg, document, 0)])
                throw new Error(msg)
            }
            if (reply.fatal) {
                this.kill()
            }
            showErrorOutput(`Python error in ${filename}`, reply.error || "")
            throw new Error(`Python failed: ${reply.error}`)
        }

        const stdout = reply.stdout ?? ""
        const stderr = reply.stderr ?? ""

        if (reply.status !== 0) {
            showErrorOutput(
                `Runtime error in ${filename}`,
                stderr || `Exit status ${reply.status}`
            )
            setRuntimeDiagnostics(
                document,
                pythonTracebackDiagnostics(stderr, filename, document)
            )
            const lastLine = stderr.trim().split("\n").pop() || `exit status ${reply.status}`
            throw new Error(`Execution failed: ${lastLine}`)
        }

        if (stderr.trim().length > 0) {
            showErrorOutput(`stderr of ${filename}`, stderr)
        }
        clearRuntimeDiagnostics(document)
        return stdout
    }
}

function pythonTracebackDiagnostics(
    stderr: string,
    filename: string,
    document: vscode.TextDocument
): vscode.Diagnostic[] {
    const lines = stderr.trim().split("\n")
    const message = lines[lines.length - 1] || "Runtime error"
    // Use the innermost frame that belongs to the user's file
    const frameRegex = new RegExp(
        `File "${filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}", line (\\d+)`
    )
    let lineNumber = 0
    for (const line of lines) {
        const m = line.match(frameRegex)
        if (m) {
            lineNumber = parseInt(m[1]) - 1
        }
    }
    return [createDiagnostic(message, document, Math.max(0, lineNumber))]
}
