<p align="center">
  <img src="resources/icon-web.png" width="112" alt="jutge web">
</p>

<h1 align="center">Jutge Web</h1>

<p align="center">
  <b>Solve <a href="https://jutge.org">Jutge.org</a> problems from any browser.</b><br>
  A web-compatible plugin for <a href="https://vscode.dev">vscode.dev</a> and <a href="https://github.dev">github.dev</a>.
</p>

<p align="center">
  <sub>Unofficial project — not affiliated with, sponsored or endorsed by Jutge.org or the Universitat Politècnica de Catalunya (UPC).</sub>
</p>

---

## Why this exists

Jutge.org has an excellent [official VS Code extension](https://marketplace.visualstudio.com/items?itemName=jutge-org.jutge-vscode),
but it only runs on **desktop** VS Code. It depends on Node.js, the local file system and
locally installed compilers, none of which exist in the browser, so in vscode.dev it simply
isn't available.

That leaves out exactly the situations where a browser editor is most useful: **tablets**,
**Chromebooks**, **lab or library computers** where nothing can be installed, or any device
where a full development setup isn't available.

**Jutge Web** is a fork of the official extension, rebuilt so that the whole workflow runs in
the browser. If you use desktop VS Code, the official extension is the better choice.

## What you can do

- **Sign in** with your Jutge.org account and browse your **courses and lists**
- Read **problem statements** next to your code
- **Create solution files** with the right header and template
- **Run the public testcases** and your own custom ones, and compare outputs side by side
- **Submit** to Jutge.org and get the **verdict** without leaving the editor
- **Exam and contest mode** is included too, though less tested in the browser

## How code runs in the browser

A browser can't run local compilers, so each language takes a different route:

| Language    | Where it runs                                                                                                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Python**  | **On your device.** CPython compiled to WebAssembly ([Pyodide](https://pyodide.org)), inside a Web Worker. `input()`, `sys.stdin` and [`yogi`](https://pypi.org/project/yogi/) work. The first run downloads ~10 MB, then it's cached. |
| **C++**     | **Remotely**, through the public [Compiler Explorer](https://godbolt.org) API (latest x86-64 GCC, with your `runner.cpp.flags`).                                                                                                       |
| **Haskell** | **Remotely**, through Compiler Explorer (latest GHC).                                                                                                                                                                                  |

Programs that loop forever are stopped after a timeout, and VS Code stays responsive.
Compiler errors show up as squiggles on the right line, with details in the **Jutge.org** output panel.

## Install

1. Open [vscode.dev](https://vscode.dev) (or any repository on github.dev).
2. Open the **Extensions** view and search for **Jutge Web**.
3. Click **Install**, then open the Jutge icon in the activity bar and sign in.

## Privacy

- Your Jutge.org credentials and submissions go **only to Jutge.org**, exactly as with the official extension.
- Python runs entirely **in your browser**.
- For C++ and Haskell testcases, the **source code and the testcase input** are sent to Compiler Explorer.
  You can point `jutge-vscode.web.compilerExplorerUrl` to your own instance.

## Limitations

- **Graphic problems** (turtle, images) can't be tested locally in the browser. Submit them to Jutge.org.
- **Exam PDFs** are saved into your workspace. Download them from the Explorer to read them.
- Compiler Explorer returns output line by line, so a **missing final newline** can't be detected locally.

## Settings

| Setting                                | Default               | Description                                    |
| -------------------------------------- | --------------------- | ---------------------------------------------- |
| `jutge-vscode.web.timeoutSeconds`      | `10`                  | Maximum run time for Python in the browser     |
| `jutge-vscode.web.compilerExplorerUrl` | `https://godbolt.org` | Compiler Explorer instance for C++ and Haskell |
| `jutge-vscode.web.cppCompilerId`       | latest GCC            | Compiler Explorer id, e.g. `g142`              |
| `jutge-vscode.web.haskellCompilerId`   | latest GHC            | Compiler Explorer id, e.g. `ghc984`            |
| `jutge-vscode.web.pyodideUrl`          | jsDelivr CDN          | Where Pyodide is loaded from                   |
| `jutge-vscode.problem.preferredLang`   | `Català`              | Language of the problem statements             |

The extension also works on desktop VS Code, where it behaves like the official one and uses
your local compilers.

## Credits and license

Built by **Alexander de Toro Todorov** ([inverso.bio](https://inverso.bio/about)) with the help of Claude Code.

Based on the official [Jutge.org VS Code extension](https://github.com/jutge-org/jutge-vscode) by
[Alex Serrano](https://github.com/serteal), [Pau Fernández](https://github.com/pauek),
[Joaquín Millán Aldaz](https://github.com/jma25l) and [Jordi Petit](https://github.com/jordi-petit),
© Universitat Politècnica de Catalunya – BarcelonaTech (UPC).

Licensed under the [Apache License 2.0](LICENSE). See [NOTICE](NOTICE) for the list of changes.
"Jutge.org" is used only to describe compatibility with that service.

More about how it works: [project website](https://detorotodorov-alexander.github.io/jutge-vscode-online/).

Found a bug? [Open an issue](https://github.com/detorotodorov-alexander/jutge-vscode-online/issues).

<details>
<summary><b>For developers</b></summary>

```bash
git clone https://github.com/detorotodorov-alexander/jutge-vscode-online.git
cd jutge-vscode-online
npm install
npm run compile                                            # builds desktop + web bundles into dist/
npx @vscode/test-web --extensionDevelopmentPath=. .        # try the web build locally
npx @vscode/vsce package                                   # create a .vsix
```

Architecture notes for the web port are in [`docs/Architecture.md`](docs/Architecture.md).

</details>
