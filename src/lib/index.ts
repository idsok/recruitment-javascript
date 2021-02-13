import { CommandsController } from "./commands.controller";
import { CountCommand } from "./commands/count";
import { FilterCommand } from "./commands/filter";
import { ICountry } from "./interfaces";

// Main class
export class App {

    private commandsController: CommandsController;

    constructor(data: ICountry[]) {
        // Register all commands here
        this.commandsController = new CommandsController(data);
        this.commandsController.registerCommand(FilterCommand.$name, new FilterCommand());
        this.commandsController.registerCommand(CountCommand.$name, new CountCommand());
    }

    public executeCommand(param: string) {
        try {
            const [ commandName, commandParam ] = param.split('=').map(item => item.trim());
            if (commandName === '--help') {
                this.displayHelp();
            } else {
                const countries = this.commandsController.executeCommand(commandName, commandParam);
                this.displayResult(countries);
            }
        } catch (ex) {
            console.error('\n\t    error: ' + ex.message);
            this.displayHelp();
        }
    }
    public displayHelp() {
        console.log(
            `
            Usage: node app [options]
            
            Examples:
                - node app --filter=ry : Filter animals
            
            Options:
                --filter=<value>       Filter animals
                --count                Counting people and animals
                --help                 Help
            `
        );
    }
    private displayResult(countries: ICountry[]) {
        if (countries.length) {
            console.log(JSON.stringify(countries, null, '  '));
        } else {
            console.log("Empty result !")
        }
    }
}