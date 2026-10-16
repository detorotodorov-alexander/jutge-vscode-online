// Modified by Alexander de Toro Todorov, 2026: VS Code for the Web support.
// Original: https://github.com/jutge-org/jutge-vscode (Apache-2.0). See NOTICE.
const { build, context } = require("esbuild")
const path = require("path")

//@ts-check
/** @typedef {import('esbuild').BuildOptions} BuildOptions **/

/** @type BuildOptions */
const baseConfig = {
    bundle: true,
    minify: process.env.NODE_ENV === "production",
    sourcemap: process.env.NODE_ENV !== "production",
    alias: {
        "@": "./src",
    },
}

// Config for extension source code (to be run in a Node-based context)
/** @type BuildOptions */
const extensionConfig = {
    ...baseConfig,
    platform: "node",
    mainFields: ["module", "main"],
    format: "cjs",
    entryPoints: ["./src/extension.ts"],
    outfile: "./dist/extension.js",
    external: ["vscode"],
    loader: { ".py": "text" },
}

// Resolve "@/platform/current" to the browser implementation in the web build.
const webPlatformPlugin = {
    name: "web-platform",
    setup(build) {
        build.onResolve({ filter: /^@\/platform\/current$/ }, () => ({
            path: path.resolve(__dirname, "src/platform/web.ts"),
        }))
    },
}

// Config for the extension when running in VS Code for the Web (vscode.dev,
// github.dev...). The extension host there is a Web Worker: no Node built-ins.
/** @type BuildOptions */
const webExtensionConfig = {
    ...baseConfig,
    platform: "browser",
    mainFields: ["browser", "module", "main"],
    format: "cjs",
    target: "es2022",
    entryPoints: ["./src/extension.ts"],
    outfile: "./dist/web/extension.js",
    external: ["vscode"],
    loader: { ".py": "text" },
    define: {
        "process.env.MODE": JSON.stringify(process.env.MODE || "production"),
        "process.env.JUTGE_API_URL": "undefined",
        "process.env.JUTGE_DOMAIN": "undefined",
        global: "globalThis",
    },
    plugins: [webPlatformPlugin],
}

// Config for webview source code (to be run in a web-based context)
/** @type BuildOptions */
const webviewConfig = {
    ...baseConfig,
    target: "esnext",
    format: "esm",
    entryPoints: ["./src/webview/main.ts"],
    outfile: "./dist/webview/main.js",
}

// Config for the sign-in view's custom-element registrations. Built as IIFE so
// the elements are defined synchronously before the inline sign-in script runs.
/** @type BuildOptions */
const signinElementsConfig = {
    ...baseConfig,
    target: "esnext",
    format: "iife",
    entryPoints: ["./src/webview/signin-elements.ts"],
    outfile: "./dist/webview/signin-elements.js",
}

const createWatchLoggerPlugin = (name) => ({
    name: `${name}-watch-logger`,
    setup(build) {
        build.onStart(() => {
            console.log(`[watch] ${name} build started`)
        })
        build.onEnd((result) => {
            if (result.errors.length === 0) {
                console.log(`[watch] ${name} build finished`)
            }
        })
    },
})

// Build script
;(async () => {
    const args = process.argv.slice(2)
    try {
        if (args.includes("--watch")) {
            // Build and watch extension and webview code
            console.log("[watch] build started")
            const extensionContext = await context({
                ...extensionConfig,
                plugins: [createWatchLoggerPlugin("extension")],
            })
            const webExtensionContext = await context({
                ...webExtensionConfig,
                plugins: [...webExtensionConfig.plugins, createWatchLoggerPlugin("web-extension")],
            })
            const webviewContext = await context({
                ...webviewConfig,
                plugins: [createWatchLoggerPlugin("webview")],
            })
            const signinElementsContext = await context({
                ...signinElementsConfig,
                plugins: [createWatchLoggerPlugin("signin-elements")],
            })

            await extensionContext.watch()
            await webExtensionContext.watch()
            await webviewContext.watch()
            await signinElementsContext.watch()
            console.log("[watch] build finished")

            process.on("SIGINT", async () => {
                await extensionContext.dispose()
                await webExtensionContext.dispose()
                await webviewContext.dispose()
                await signinElementsContext.dispose()
                process.exit(0)
            })
        } else {
            // Build extension and webview code
            await build(extensionConfig)
            await build(webExtensionConfig)
            await build(webviewConfig)
            await build(signinElementsConfig)
            console.log("[watch] build complete")
        }
    } catch (err) {
        process.stderr.write(err?.stderr || `${err}\n`)
        process.exit(1)
    }
})()
