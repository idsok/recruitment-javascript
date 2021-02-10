import { ICommand, ICountry } from "./interfaces";

export class CommandsController {

    private commands: Map<string, ICommand>;
    private data: ICountry[];  

    constructor(data: ICountry[]) {
        this.commands = new Map<string, ICommand>();
        this.data = data;
    }

    public getCommands(): Map<string, ICommand> {
        return this.commands;
    }

    public registerCommand(name: string, command: ICommand) {
        this.commands.set(name, command);
    }

    public executeCommand(name: string, param?: string): ICountry[] {
        const command = this.commands.get(name);
        if (!command) {
            throw new Error(`Command '${name}' not supported !`)
        }
        return command.execute(this.data, param);
    }
}