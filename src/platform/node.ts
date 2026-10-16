/**
 * Desktop (Node.js extension host) implementation of the platform layer.
 */
import * as childProcess from "child_process"
import * as os from "os"
import * as path from "path"
import * as vscode from "vscode"
import { PythonExtension } from "@vscode/python-extension"

import { ConfigService } from "@/services/config"
import { Proglang } from "@/services/runners/languages"
import { CppRunner } from "@/services/runners/languages/cpp"
import { GHCRunner } from "@/services/runners/languages/ghc"
import { PythonRunner } from "@/services/runners/languages/python"
import type { LanguageRunner } from "@/services/runners/types"
import { getWorkingDirectory } from "./node-utils"
import type { Platform } from "./types"

// Created lazily: `languages.ts` imports this module, so `Proglang` is not yet
// initialized while this module is being evaluated.
let runners: Record<Proglang, LanguageRunner> | null = null
function getRunners(): Record<Proglang, LanguageRunner> {
    if (runners === null) {
        runners = {
            [Proglang.CPP]: new CppRunner(),
            [Proglang.PYTHON]: new PythonRunner(),
            [Proglang.GHC]: new GHCRunner(),
        }
    }
    return runners
}

const rmseRegex = /^[0-9.]+ \(([0-9.]+)\)$/

export const platform: Platform = {
    kind: "desktop",
    hasTerminal: true,

    init(_context) {
        // The Python runner needs the interpreter selected in the Python extension.
        PythonExtension.api()
            .then((api) => ConfigService.setPythonApi(api))
            .catch((e) => console.warn(`[Platform] Python extension API not available: ${e}`))
    },

    describe() {
        return [
            `Operating System:  ${os.type()} ${os.release()} ${os.arch()}`,
            `Node.js Version:   ${process.version}`,
        ]
    },

    getRunner(proglang) {
        return getRunners()[proglang]
    },

    async compareImages(a, b) {
        const imgPath1 = a.fsPath
        const imgPath2 = b.fsPath
        const result = childProcess.spawnSync(
            "compare",
            ["-metric", "RMSE", imgPath1, imgPath2, "NULL:"],
            { cwd: getWorkingDirectory(imgPath1) }
        )
        if (result.error || result.signal) {
            const msg = `Error launching 'compare' with images '${imgPath1}' and '${imgPath2}': ${result.stderr?.toString("utf-8")}`
            vscode.window.showErrorMessage(msg)
            return null
        }
        const match = result.stderr.toString().match(rmseRegex)
        if (!match) {
            vscode.window.showErrorMessage(`Could not compare images`)
            return null
        }
        return Number(match[1])
    },

    documentsDirUri(_context) {
        return vscode.Uri.file(path.join(os.tmpdir(), "jutge-vscode-documents"))
    },
}
