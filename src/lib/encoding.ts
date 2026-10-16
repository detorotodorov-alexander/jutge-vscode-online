/**
 * Text / binary helpers (replacement for Node's Buffer). No imports at all, so this
 * file can be used by the extension host (desktop and web) and by webviews.
 */

// ---------------------------------------------------------------------------

const encoder = new TextEncoder()
const decoder = new TextDecoder("utf-8")

export function stringToBytes(s: string): Uint8Array {
    return encoder.encode(s)
}

export function bytesToString(b: Uint8Array): string {
    return decoder.decode(b)
}

export function base64ToBytes(b64: string): Uint8Array {
    const bin = atob(b64)
    const out = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) {
        out[i] = bin.charCodeAt(i)
    }
    return out
}

export function bytesToBase64(bytes: Uint8Array): string {
    let bin = ""
    const CHUNK = 0x8000
    for (let i = 0; i < bytes.length; i += CHUNK) {
        bin += String.fromCharCode(...bytes.subarray(i, i + CHUNK))
    }
    return btoa(bin)
}

export function base64ToString(b64: string): string {
    return bytesToString(base64ToBytes(b64))
}
