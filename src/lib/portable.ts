/**
 * Small helpers that work identically in the Node extension host (desktop)
 * and in the browser (web worker) extension host used by vscode.dev / github.dev.
 *
 * Nothing in this file may import Node built-ins (fs, path, os, Buffer...).
 */
import * as vscode from "vscode"

// ---------------------------------------------------------------------------
// POSIX-style path helpers (operate on `Uri.path`, which always uses '/')
// ---------------------------------------------------------------------------

export function basename(p: string): string {
    const clean = p.replace(/[\\/]+$/, "")
    const idx = Math.max(clean.lastIndexOf("/"), clean.lastIndexOf("\\"))
    return idx === -1 ? clean : clean.slice(idx + 1)
}

export function dirname(p: string): string {
    const clean = p.replace(/[\\/]+$/, "")
    const idx = Math.max(clean.lastIndexOf("/"), clean.lastIndexOf("\\"))
    if (idx === -1) {
        return "."
    }
    if (idx === 0) {
        return clean[0]
    }
    return clean.slice(0, idx)
}

export function extname(p: string): string {
    const base = basename(p)
    const idx = base.lastIndexOf(".")
    return idx <= 0 ? "" : base.slice(idx)
}

export {
    base64ToBytes,
    base64ToString,
    bytesToBase64,
    bytesToString,
    stringToBytes,
} from "./encoding"
import { bytesToString, stringToBytes } from "./encoding"

// ---------------------------------------------------------------------------
// File system through `vscode.workspace.fs` (works for file://, vscode-vfs://,
// memfs://, vscode-userdata://, ... i.e. anything VS Code can open)
// ---------------------------------------------------------------------------

export async function uriExists(uri: vscode.Uri | null | undefined): Promise<boolean> {
    if (!uri) {
        return false
    }
    try {
        await vscode.workspace.fs.stat(uri)
        return true
    } catch {
        return false
    }
}

export async function readTextFile(uri: vscode.Uri): Promise<string> {
    return bytesToString(await vscode.workspace.fs.readFile(uri))
}

export async function writeTextFile(uri: vscode.Uri, content: string): Promise<void> {
    await vscode.workspace.fs.writeFile(uri, stringToBytes(content))
}

/** Returns a copy of `uri` with a different path. */
export function withPath(uri: vscode.Uri, path: string): vscode.Uri {
    return uri.with({ path })
}

/** A short, human readable name for a document/uri (used in messages). */
export function displayName(uri: vscode.Uri): string {
    return basename(uri.path)
}
