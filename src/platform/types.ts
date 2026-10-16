import type * as vscode from "vscode"
import type { Proglang } from "@/services/runners/languages"
import type { LanguageRunner } from "@/services/runners/types"

/**
 * Everything that differs between the desktop (Node) and the web (browser worker)
 * extension hosts lives behind this interface. The concrete implementation is
 * chosen at build time: `esbuild.js` resolves `@/platform/current` to either
 * `node.ts` or `web.ts`.
 */
export interface Platform {
    readonly kind: "desktop" | "web"

    /** Called once from `activate()`. */
    init(context: vscode.ExtensionContext): void

    /** Lines describing the runtime, printed at startup. */
    describe(): string[]

    /** Runner used to execute code locally for the given language. */
    getRunner(proglang: Proglang): LanguageRunner

    /** Compare two PNG images (graphic problems). Returns RMSE or null if unsupported. */
    compareImages(a: vscode.Uri, b: vscode.Uri): Promise<number | null>

    /** Directory where downloaded exam documents are stored. */
    documentsDirUri(context: vscode.ExtensionContext): vscode.Uri

    /** Whether opening a terminal to show errors is possible. */
    readonly hasTerminal: boolean
}
