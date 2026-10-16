/**
 * Node-only helpers used by the desktop runners. Never import this file from code
 * that is shared with the web build.
 */
import * as fs from "fs"
import * as os from "os"
import { dirname } from "path"
import { pipeline } from "stream/promises"
import * as vscode from "vscode"
import { getContext } from "@/extension"

export function isWindows() {
    return os.type() === "Windows_NT"
}

const getWorkspaceUri = (): vscode.Uri | null => {
    const workspaces = vscode.workspace.workspaceFolders
    if (workspaces && workspaces.length > 0) {
        return workspaces[0].uri
    }
    return null
}

export const getExtensionDirectory = (): string => {
    let path = getContext().extensionUri.path
    // Windows: remove leading '/'
    if (isWindows() && path[0] === "/") {
        path = path.slice(1)
    }
    return path
}

export const getWorkingDirectory = (filename: string) => {
    const workspaceUri = getWorkspaceUri()
    let workingDir = workspaceUri !== null ? workspaceUri.path : dirname(filename)
    // Windows: remove leading '/'
    if (isWindows() && workingDir[0] === "/") {
        workingDir = workingDir.slice(1)
    }
    return workingDir
}

export async function downloadFile(url: string, targetPath: string): Promise<void> {
    const response = await fetch(url)
    if (response.body === null) {
        throw new Error(`Could not download '${url}'`)
    }
    try {
        await pipeline(response.body as any, fs.createWriteStream(targetPath))
    } catch (err: any) {
        throw new Error(`Could not download '${url}': ${err}`)
    }
}

export async function appendToFile(filepath: string, code: string) {
    return fs.appendFileSync(filepath, code)
}
