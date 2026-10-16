import * as vscode from "vscode"
import { basename, extname } from "@/lib/portable"
import { platform } from "@/platform/current"
import type { LanguageRunner } from "./types"

export type { LanguageRunner } from "./types"

export enum Proglang {
    CPP = "C++",
    PYTHON = "Python",
    GHC = "GHC", // Haskell
}
export type LanguageInfo = {
    proglang: Proglang
    /** Runner for the current platform (desktop: local processes, web: browser/remote) */
    readonly runner: LanguageRunner
    extensions: string[]
    commentPrefix: string
    mimeType: string
    compilers: string[]
}

const __languages: Record<Proglang, LanguageInfo> = {
    [Proglang.PYTHON]: {
        proglang: Proglang.PYTHON,
        get runner() {
            return platform.getRunner(this.proglang)
        },
        extensions: [".py"],
        commentPrefix: "#",
        mimeType: "text/x-script.phyton",
        compilers: ["Python3", "RunPython"],
    },
    [Proglang.CPP]: {
        proglang: Proglang.CPP,
        get runner() {
            return platform.getRunner(this.proglang)
        },
        extensions: [".cc", ".cpp", ".cxx", ".c++"],
        commentPrefix: "//",
        mimeType: "text/x-c",
        compilers: ["G++17", "G++11", "G++", "Clang++17", "P1++"],
    },
    [Proglang.GHC]: {
        proglang: Proglang.GHC,
        get runner() {
            return platform.getRunner(this.proglang)
        },
        extensions: [".hs"],
        commentPrefix: "--",
        mimeType: "text/x-haskell",
        compilers: ["GHC"],
    },
}

export function getProglangExtensions() {
    const extensions: string[] = []
    for (const info of Object.values(__languages)) {
        extensions.push(...info.extensions)
    }
    return extensions
}

export function proglangFindIf(
    func: (info: LanguageInfo) => boolean,
    errorMsg: string
): Proglang {
    for (const [lang, info] of Object.entries(__languages)) {
        if (func(info)) {
            return lang as Proglang
        }
    }
    throw new Error(errorMsg)
}

export function proglangFromExtension(extension: string): Proglang {
    return proglangFindIf(
        (info) => info.extensions.includes(extension),
        `Language with extension '${extension}' not supported`
    )
}

export function proglangFromCompiler(compiler_id: string): Proglang {
    return proglangFindIf(
        (info) => info.compilers.includes(compiler_id),
        `Language with compiler '${compiler_id}' not supported`
    )
}

export function proglangFromFilepath(filePath: string): Proglang {
    return proglangFromExtension(extname(basename(filePath)))
}

export function proglangInfoGet(proglang: Proglang): LanguageInfo {
    for (const [lang, info] of Object.entries(__languages)) {
        if (lang === proglang) {
            return info
        }
    }
    throw new Error(`Language not found`)
}

export async function chooseProgrammingLanguage(problemNm: string): Promise<Proglang | null> {
    const fileType = await vscode.window.showQuickPick(
        Object.values(Proglang).map((lang) => ({
            label: `${lang} File`,
            description: lang,
        })),
        {
            placeHolder: "Select file type",
            title: `New file for ${problemNm}`,
        }
    )
    return fileType?.description || null
}
