import type * as vscode from "vscode"

/**
 * A language runner compiles (if needed) and runs a source file with a given input,
 * returning the program's standard output.
 *
 * Desktop runners spawn local processes (g++, python, ghc). Web runners execute
 * code in the browser (Pyodide) or through a remote compilation service.
 */
export interface LanguageRunner {
    run(
        compiler: string | null,
        codeUri: vscode.Uri,
        input: string,
        document: vscode.TextDocument
    ): Promise<string>

    /** Directory where the program ran (only meaningful for desktop runners). */
    getRunningDir(): string
}

/** Generic process result, compatible with Node's `SpawnSyncReturns<Buffer>`. */
export type ProcessResult = {
    stdout?: { length: number; toString(): string } | null
    stderr: { length: number; toString(): string }
    status: number | null
    signal?: string | null
    error?: Error | undefined
}
