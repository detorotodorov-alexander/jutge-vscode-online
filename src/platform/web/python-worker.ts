/**
 * Source code of the Web Worker that hosts Pyodide (CPython compiled to WebAssembly).
 *
 * It is kept as a string and started from a Blob URL so that it can be spawned from
 * the web extension host without needing a separately served file. Running Python in
 * its own worker means an infinite loop can be stopped (worker.terminate()) without
 * freezing the rest of VS Code.
 */
export const PYTHON_WORKER_SOURCE = String.raw`
"use strict";

const HARNESS = ${"`"}
import sys, io, traceback

def __jutge_run(code, inp, filename):
    out, err = io.StringIO(), io.StringIO()
    saved = sys.stdin, sys.stdout, sys.stderr
    sys.stdin, sys.stdout, sys.stderr = io.StringIO(inp), out, err
    status = 0
    # Forget modules that capture stdin on import (yogi does)
    for name in [m for m in sys.modules if m == "yogi" or m.startswith("yogi.")]:
        del sys.modules[name]
    try:
        g = {"__name__": "__main__", "__file__": filename, "__builtins__": __builtins__}
        exec(compile(code, filename, "exec"), g)
    except SystemExit as e:
        if e.code is None:
            status = 0
        elif isinstance(e.code, int):
            status = e.code
        else:
            print(e.code, file=err)
            status = 1
    except BaseException:
        tb = traceback.format_exc()
        # Hide the harness frame from the traceback
        lines = [l for l in tb.splitlines(True) if "__jutge_run" not in l and '<exec>' not in l]
        err.write("".join(lines))
        status = 1
    finally:
        try:
            sys.stdout.flush()
        except Exception:
            pass
        sys.stdin, sys.stdout, sys.stderr = saved
    return [out.getvalue(), err.getvalue(), status]
${"`"};

let pyodidePromise = null;

function loadOnce(base, yogiSource) {
    if (pyodidePromise === null) {
        pyodidePromise = (async () => {
            importScripts(base + "pyodide.js");
            const py = await loadPyodide({ indexURL: base });
            py.FS.mkdirTree("/home/pyodide/jutge/yogi");
            py.FS.writeFile("/home/pyodide/jutge/yogi/__init__.py", yogiSource);
            py.runPython("import sys; sys.path.insert(0, '/home/pyodide/jutge')");
            py.runPython(HARNESS);
            return py;
        })();
    }
    return pyodidePromise;
}

self.onmessage = async (event) => {
    const msg = event.data;
    try {
        const py = await loadOnce(msg.base, msg.yogi);
        if (msg.type === "load") {
            self.postMessage({ id: msg.id, ok: true, version: py.version });
            return;
        }
        const run = py.globals.get("__jutge_run");
        const result = run(msg.code, msg.input, msg.filename);
        const [stdout, stderr, status] = result.toJs();
        result.destroy();
        run.destroy();
        self.postMessage({ id: msg.id, ok: true, stdout, stderr, status });
    } catch (err) {
        const message = (err && (err.message || err.toString())) || "Unknown error";
        self.postMessage({ id: msg.id, ok: false, error: message, fatal: /fatal error/i.test(message) });
    }
};
`
