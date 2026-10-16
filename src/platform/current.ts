// The desktop build uses this file as is. The web build (see esbuild.js) replaces
// every import of "@/platform/current" with "./web.ts".
export { platform } from "./node"
