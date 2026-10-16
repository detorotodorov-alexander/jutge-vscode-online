import * as vscode from "vscode"

import { Logger } from "@/loggers"
import { basename } from "@/lib/portable"
import {
    clearCompileDiagnostics,
    clearRuntimeDiagnostics,
    createDiagnostic,
    setCompileDiagnostics,
    setRuntimeDiagnostics,
} from "@/services/runners/errors"
import type { LanguageRunner } from "@/services/runners/types"
import { showErrorOutput, webSetting } from "./output"

/**
 * There is no C++ or Haskell compiler that runs comfortably inside a browser tab,
 * so in VS Code for the Web these languages are compiled and executed remotely with
 * the public Compiler Explorer API (https://godbolt.org). Only the source code and
 * the testcase input are sent. Users can point to a self-hosted instance with the
 * `jutge-vscode.web.compilerExplorerUrl` setting.
 */

type CELanguage = "c++" | "haskell"

type CECompiler = {
    id: string
    name: string
    semver?: string
    supportsExecute?: boolean
    instructionSet?: string
}

type CELine = {
    text: string
    // Parsed compiler message (line/column are 1-based; severity 3 = error, 2 = warning)
    tag?: { line?: number; column?: number; severity?: number; text?: string }
}

type CEResponse = {
    code: number
    didExecute?: boolean
    timedOut?: boolean
    stdout?: CELine[]
    stderr?: CELine[]
    buildResult?: { code: number; stdout?: CELine[]; stderr?: CELine[] }
    execResult?: { code: number; stdout?: CELine[]; stderr?: CELine[]; timedOut?: boolean }
}

const DEFAULT_CE_URL = "https://godbolt.org"

const stripAnsi = (s: string) => s.replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
const joinLines = (lines?: CELine[]) => (lines ?? []).map((l) => stripAnsi(l.text)).join("\n")

function compilerDiagnostics(
    lines: CELine[],
    document: vscode.TextDocument
): vscode.Diagnostic[] {
    const diagnostics: vscode.Diagnostic[] = []
    for (const { tag } of lines) {
        if (!tag || !tag.line || !tag.text) {
            continue
        }
        const line = Math.max(0, Math.min(tag.line - 1, document.lineCount - 1))
        const col = Math.max(0, (tag.column ?? 1) - 1)
        const textLine = document.lineAt(line)
        const range = new vscode.Range(
            line,
            Math.min(col, textLine.text.length),
            line,
            textLine.text.length
        )
        const severity =
            (tag.severity ?? 3) >= 3
                ? vscode.DiagnosticSeverity.Error
                : vscode.DiagnosticSeverity.Warning
        const d = new vscode.Diagnostic(range, stripAnsi(tag.text), severity)
        d.source = "Compiler Explorer"
        diagnostics.push(d)
    }
    return diagnostics
}

function compareSemver(a?: string, b?: string): number {
    const pa = (a ?? "0")
        .split(/[^0-9]+/)
        .filter(Boolean)
        .map(Number)
    const pb = (b ?? "0")
        .split(/[^0-9]+/)
        .filter(Boolean)
        .map(Number)
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const d = (pa[i] ?? 0) - (pb[i] ?? 0)
        if (d !== 0) {
            return d
        }
    }
    return 0
}

export class CompilerExplorerRunner extends Logger implements LanguageRunner {
    private compilerCache = new Map<CELanguage, string>()

    constructor(
        private readonly language: CELanguage,
        private readonly settingCompiler: string,
        private readonly settingFlags: string,
        private readonly defaultFlags: string[],
        private readonly compilerIdPattern: RegExp
    ) {
        super()
    }

    getRunningDir(): string {
        return ""
    }

    private get apiBase(): string {
        return (
            webSetting<string>("web.compilerExplorerUrl", DEFAULT_CE_URL).replace(/\/+$/, "") +
            "/api"
        )
    }

    private async fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
        let response: Response
        try {
            response = await fetch(url, {
                ...init,
                headers: { Accept: "application/json", ...(init?.headers ?? {}) },
            })
        } catch (e) {
            throw new Error(
                `Could not reach Compiler Explorer (${this.apiBase}). ` +
                    `Check your connection or the 'jutge-vscode.web.compilerExplorerUrl' setting. (${e})`
            )
        }
        if (!response.ok) {
            const text = await response.text().catch(() => "")
            throw new Error(
                `Compiler Explorer answered ${response.status}: ${text.slice(0, 300)}`
            )
        }
        return (await response.json()) as T
    }

    private async compilerId(): Promise<string> {
        const configured = webSetting<string>(this.settingCompiler, "")
        if (configured) {
            return configured
        }

        const cached = this.compilerCache.get(this.language)
        if (cached) {
            return cached
        }

        const compilers = await this.fetchJson<CECompiler[]>(
            `${this.apiBase}/compilers/${encodeURIComponent(this.language)}?fields=id,name,semver,supportsExecute,instructionSet`
        )
        const candidates = compilers
            .filter((c) => c.supportsExecute !== false)
            .filter((c) => !c.instructionSet || c.instructionSet === "amd64")
            .filter((c) => this.compilerIdPattern.test(c.id))
            .filter((c) => !/trunk|snapshot|assert/i.test(`${c.id} ${c.name}`))
            .sort((a, b) => compareSemver(b.semver, a.semver))

        if (candidates.length === 0) {
            throw new Error(
                `No ${this.language} compiler able to execute code found on Compiler Explorer`
            )
        }
        const chosen = candidates[0]
        this.log.info(`Using Compiler Explorer compiler ${chosen.id} (${chosen.name})`)
        this.compilerCache.set(this.language, chosen.id)
        return chosen.id
    }

    async run(
        _compiler: string | null,
        codeUri: vscode.Uri,
        input: string,
        document: vscode.TextDocument
    ): Promise<string> {
        const filename = basename(codeUri.path)
        const compilerId = await this.compilerId()
        const flags = webSetting<string[]>(this.settingFlags, this.defaultFlags)

        const body = {
            source: document.getText(),
            lang: this.language,
            allowStoreCodeDebug: false,
            options: {
                userArguments: flags.join(" "),
                executeParameters: { args: [], stdin: input },
                compilerOptions: { executorRequest: true, skipAsm: true },
                filters: { execute: true },
                tools: [],
                libraries: [],
            },
        }

        const result = await vscode.window.withProgress(
            {
                location: vscode.ProgressLocation.Window,
                title: `Compiling ${filename} on Compiler Explorer…`,
            },
            () =>
                this.fetchJson<CEResponse>(
                    `${this.apiBase}/compiler/${encodeURIComponent(compilerId)}/compile`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(body),
                    }
                )
        )

        // 1. Compilation
        const build = result.buildResult
        const buildStderr = joinLines(build?.stderr).replaceAll("<source>", filename)
        const buildDiagnostics = compilerDiagnostics(build?.stderr ?? [], document)
        if (build && build.code !== 0) {
            showErrorOutput(`Compilation error in ${filename} (${compilerId})`, buildStderr)
            setCompileDiagnostics(
                document,
                buildDiagnostics.length > 0
                    ? buildDiagnostics
                    : [createDiagnostic(buildStderr || `Compilation failed`, document, 0)]
            )
            throw new Error(`Compilation failed`)
        }
        if (buildDiagnostics.length > 0) {
            setCompileDiagnostics(document, buildDiagnostics) // warnings
        } else {
            clearCompileDiagnostics(document)
        }
        if (buildStderr.trim()) {
            showErrorOutput(`Compiler warnings for ${filename}`, buildStderr)
        }

        // 2. Execution
        const exec = result.execResult ?? result
        const stdoutLines = exec.stdout ?? []
        const stderr = joinLines(exec.stderr)
        const timedOut = Boolean(result.timedOut || result.execResult?.timedOut)

        if (timedOut) {
            const msg = `Execution timed out on Compiler Explorer (infinite loop?)`
            setRuntimeDiagnostics(document, [createDiagnostic(msg, document, 0)])
            throw new Error(msg)
        }
        if (result.didExecute === false) {
            showErrorOutput(`Could not execute ${filename}`, stderr || JSON.stringify(result))
            throw new Error(`Compiler Explorer did not execute the program`)
        }
        if (exec.code !== 0) {
            const msg = stderr.trim() || `Process exited with code ${exec.code}.`
            showErrorOutput(`Runtime error in ${filename}`, msg)
            setRuntimeDiagnostics(document, [createDiagnostic(msg, document, 0)])
            throw new Error(`Execution failed: exit code ${exec.code}`)
        }
        if (stderr.trim()) {
            showErrorOutput(`stderr of ${filename}`, stderr)
        }
        clearRuntimeDiagnostics(document)

        // Compiler Explorer returns the output split in lines; rebuild it with the
        // usual trailing newline after each line.
        return stdoutLines.map((l) => l.text + "\n").join("")
    }
}
