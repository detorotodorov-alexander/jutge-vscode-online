import * as vscode from "vscode"

let channel: vscode.OutputChannel | null = null

/**
 * In the browser there is no terminal to show compiler / runtime errors, so they are
 * written to a "Jutge.org" output channel instead.
 */
export function jutgeOutput(): vscode.OutputChannel {
    if (channel === null) {
        channel = vscode.window.createOutputChannel("Jutge.org")
    }
    return channel
}

export function showErrorOutput(title: string, text: string) {
    const out = jutgeOutput()
    out.appendLine(`──── ${title} (${new Date().toLocaleTimeString()}) ────`)
    out.appendLine(text.trimEnd())
    out.appendLine("")
    out.show(true)
}

export function webSetting<T>(key: string, fallback: T): T {
    const value = vscode.workspace.getConfiguration("jutge-vscode").get<T>(key)
    return value === undefined || value === null || (value as any) === "" ? fallback : value
}
