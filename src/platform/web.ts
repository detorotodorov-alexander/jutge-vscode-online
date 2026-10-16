/**
 * Browser (web worker extension host) implementation of the platform layer,
 * used in vscode.dev, github.dev and any other VS Code for the Web.
 */
import * as vscode from "vscode"

import { Proglang } from "@/services/runners/languages"
import type { LanguageRunner } from "@/services/runners/types"
import { CompilerExplorerRunner } from "./web/compiler-explorer-runner"
import { WebPythonRunner } from "./web/python-runner"
import type { Platform } from "./types"

let runners: Record<Proglang, LanguageRunner> | null = null

function getRunners(): Record<Proglang, LanguageRunner> {
    if (runners === null) {
        runners = {
            [Proglang.PYTHON]: new WebPythonRunner(),
            [Proglang.CPP]: new CompilerExplorerRunner(
                "c++",
                "web.cppCompilerId",
                "runner.cpp.flags",
                ["-std=c++17", "-O2", "-Wall"],
                /^g\d+$/ // x86-64 GCC
            ),
            [Proglang.GHC]: new CompilerExplorerRunner(
                "haskell",
                "web.haskellCompilerId",
                "runner.ghc.flags",
                ["-O2"],
                /^ghc\d+$/
            ),
        }
    }
    return runners
}

export const platform: Platform = {
    kind: "web",
    hasTerminal: false,

    init(_context) {},

    describe() {
        return [
            `Platform:          Web (${typeof navigator !== "undefined" ? navigator.userAgent : "?"})`,
        ]
    },

    getRunner(proglang) {
        return getRunners()[proglang]
    },

    async compareImages() {
        return null
    },

    documentsDirUri(context) {
        return vscode.Uri.joinPath(context.globalStorageUri, "documents")
    },
}
