// Modified by Alexander de Toro Todorov, 2026: VS Code for the Web support.
// Original: https://github.com/jutge-org/jutge-vscode (Apache-2.0). See NOTICE.
import * as vscode from "vscode"
import { Testcase } from "./jutge_api_client"
import {
    base64ToBytes,
    basename,
    bytesToString,
    dirname,
    extname,
    uriExists,
} from "./lib/portable"
import {
    Proglang,
    getProglangExtensions,
    proglangFromCompiler,
    proglangInfoGet,
} from "./services/runners/languages"
import { InputExpected, Problem } from "./types"

/**
 * A helper function that returns a unique alphanumeric identifier called a nonce.
 *
 * @remarks This function is primarily used to help enforce content security
 * policies for resources/scripts being executed in a webview context.
 *
 * @returns A nonce
 */
export function getNonce() {
    let text = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

export async function chooseFromEditorList(
    editors: readonly vscode.TextEditor[]
): Promise<vscode.TextEditor | undefined> {
    // Filter out editors that are not source files (e.g. logs, output, diffs).
    // In VS Code for the Web files are not "file:" but "vscode-vfs:", "memfs:", etc.
    const ignoredSchemes = [
        "output",
        "jutge-diff",
        "debug",
        "vscode-terminal",
        "git",
        "vscode-settings",
    ]
    editors = editors.filter((editor) => !ignoredSchemes.includes(editor.document.uri.scheme))
    if (editors.length === 0) {
        return
    }
    if (editors.length === 1) {
        return editors[0]
    }

    const selectedEditor = await vscode.window.showQuickPick(
        editors.map((editor) => ({
            label: basename(editor.document.uri.path),
            description: editor.document.languageId,
            editor,
        }))
    )
    // TODO: What if
    return selectedEditor?.editor
}

export const preferredLangToLangId: { [key: string]: string } = {
    Català: "ca",
    Castellano: "es",
    English: "en",
}
export const fallbackLangOrder = ["ca", "es", "en", "fr"]

export function getDefaultProblemId(problemNm: string): string {
    const preferredLang = vscode.workspace
        .getConfiguration("jutge-vscode")
        .get("problem.preferredLang") as string
    const preferredLangId = preferredLangToLangId[preferredLang]
    return problemNm + "_" + preferredLangId
}

export async function waitMilliseconds(time_ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time_ms)
    })
}

//
// Convert a normal title to a suitable name for a file.
// 1. Map special characters (accented, ç and ñ).
// 2. Remove other non-space characters.
// 3. Reduce spaces to one, and swap for '_'.
//
export function sanitizeTitle(title: string): string {
    // Replacements for accented characters
    const replacements: [RegExp, string][] = [
        // 1.
        [/[àá]/g, "a"],
        [/[èé]/g, "e"],
        [/[íï]/g, "i"],
        [/[òó]/g, "o"],
        [/[úü]/g, "u"],
        [/ñ/g, "n"],
        [/ç/g, "c"],

        // 2.
        [/[^a-zA-Z0-9 ]/g, ""],

        // 3.
        [/ +/g, " "],
        [/ /g, "_"],
    ]
    for (const [regexp, repl] of replacements) {
        title = title.replaceAll(regexp, repl)
    }
    return title
}

export function decodeTestcase(testcase: Testcase): InputExpected {
    const { input_b64, correct_b64 } = testcase
    const input = bytesToString(base64ToBytes(input_b64))
    const expected = base64ToBytes(correct_b64)
    return { input, expected }
}

const jutgeFileRegex = /([P-Z]\d{5}).*/

export function getProblemIdFromFilename(filePath: string) {
    const m = filePath.match(jutgeFileRegex)
    return m === null ? null : m[1]
}

export async function fileUriExists(fileUri: vscode.Uri | null): Promise<boolean> {
    return uriExists(fileUri)
}

export function getCompilerId(problem: Problem): string {
    const compilers = problem.handler?.compilers
    let compiler_id = ""
    if (Array.isArray(compilers)) {
        compiler_id = compilers[0]
    } else if (typeof compilers === "string") {
        compiler_id = compilers
    }
    return compiler_id
}

export function getProglangFromProblem(problem: Problem): Proglang | null {
    const compiler_id = getCompilerId(problem)
    if (!compiler_id) {
        return null
    }
    try {
        return proglangFromCompiler(compiler_id)
        //
    } catch (e) {
        vscode.window.showErrorMessage(`Could not determine programming language`)
        return null
    }
}

export function defaultFilenameForProblem(problem: Problem) {
    const { problem_id, title } = problem
    const proglang = getProglangFromProblem(problem) || Proglang.CPP
    const langInfo = proglangInfoGet(proglang)
    const defaultExtension = langInfo.extensions[0]
    return {
        filename: `${problem_id}_${sanitizeTitle(title)}`,
        extension: defaultExtension,
    }
}

export async function findPossibleFiles(filename: string, extension?: string) {
    const pattern = extension ? `*${filename}*${extension}` : `*${filename}*.*`
    return await vscode.workspace.findFiles(pattern)
}

export async function sourceFileExists(problem: Problem): Promise<boolean> {
    const { filename } = defaultFilenameForProblem(problem)
    const compatibleUris = await findPossibleFiles(filename)
    return compatibleUris.length > 0
}

export async function findCodeFilenameForProblem(
    workspace: vscode.WorkspaceFolder,
    problemNm: string
): Promise<vscode.Uri | null> {
    const problemId = getDefaultProblemId(problemNm)
    const proglangExtensions = getProglangExtensions()

    // Find files that match
    const candidates: vscode.Uri[] = []
    for (const [name, type] of await vscode.workspace.fs.readDirectory(workspace.uri)) {
        const extension = extname(name)
        if (
            type === vscode.FileType.File &&
            name.startsWith(problemId) &&
            proglangExtensions.includes(extension)
        ) {
            candidates.push(vscode.Uri.joinPath(workspace.uri, name))
        }
    }

    return candidates[0] || null
}

export function string2Uint8Array(data: string): Uint8Array<ArrayBufferLike> {
    const encoder = new TextEncoder()
    return encoder.encode(data)
}

const endsWithParenNumRegex = / \(([0-9]+)\)$/

export function addParenthesizedNumerToPath(path: string): string {
    const baseDir = dirname(path)
    const filename = basename(path)
    const extension = extname(filename)

    let filenameNoExt = filename.slice(0, -extension.length)

    const match = filenameNoExt.match(endsWithParenNumRegex)
    let num: number = 1
    let newFilename: string = filenameNoExt
    if (match) {
        num = 1 + Number(match[1])
        newFilename = filenameNoExt.slice(0, match.index)
    }
    newFilename += ` (${num})` + extension
    return baseDir === "/" ? `/${newFilename}` : `${baseDir}/${newFilename}`
}

/** Given a Uri, finds the first "name (N).ext" sibling that does not exist yet. */
export async function findFirstAvailableNumberedUri(uri: vscode.Uri): Promise<vscode.Uri> {
    while (await uriExists(uri)) {
        uri = uri.with({ path: addParenthesizedNumerToPath(uri.path) })
    }
    return uri
}

export async function showCodeDocument(document: vscode.TextDocument) {
    return vscode.window.showTextDocument(document, {
        preview: false,
        viewColumn: vscode.ViewColumn.One,
    })
}
