import { LanguageCode } from "@/types"
import { StaticLogger } from "@/loggers"
import type { PythonExtension } from "@vscode/python-extension"
import * as vscode from "vscode"

export class ConfigService extends StaticLogger {
    private static pythonApi: PythonExtension | null = null

    /** Set by the desktop platform once the Python extension API is available. */
    public static setPythonApi(api: PythonExtension): void {
        ConfigService.pythonApi = api
    }

    private static get python() {
        if (ConfigService.pythonApi === null) {
            throw new Error(
                `The Python extension (ms-python.python) is needed to run Python testcases. Please install it.`
            )
        }
        return ConfigService.pythonApi
    }

    private static get config() {
        return vscode.workspace.getConfiguration("jutge-vscode")
    }

    private static getString(key: string): string {
        let config = ConfigService.config.get<string>(key)
        if (config === undefined || config === "") {
            vscode.window.showWarningMessage(`Warning: '${key}' setting is undefined.`)
            config = "<undefined>" // set to default
        }
        return config
    }

    private static getStringArray(key: string): Array<string> {
        let config = ConfigService.config.get<Array<string>>(key)
        if (config === undefined) {
            vscode.window.showWarningMessage(`Warning: '${key}' setting is undefined.`)
            config = ["-u"] // set to default
        }
        return config
    }

    public static getPythonCommand(): string {
        const env = ConfigService.python.environments.getActiveEnvironmentPath()
        this.log.debug(`[ConfigService] Python environment is: "${env.path}"`)
        return env.path
    }

    public static getPythonFlags(): Array<string> {
        return ConfigService.getStringArray("runner.python.flags")
    }

    public static getCppCommand(): string {
        return ConfigService.getString("runner.cpp.command")
    }

    public static getCppFlags(): string {
        return ConfigService.getString("runner.cpp.flags")
    }

    public static getGHCCommand(): string {
        return ConfigService.getString("runner.ghc.command")
    }

    public static getGHCFlags(): Array<string> {
        return ConfigService.getStringArray("runner.ghc.flags")
    }

    public static getPreferredLang(): string {
        return ConfigService.getString("problem.preferredLang")
    }

    private static codes: Record<string, LanguageCode> = {
        Català: LanguageCode.ca,
        Castellano: LanguageCode.es,
        English: LanguageCode.en,
        Français: LanguageCode.fr,
        Deutsch: LanguageCode.de,
    }

    public static getPreferredLangId(): LanguageCode {
        return this.codes[this.getPreferredLang()] || "??"
    }
}
