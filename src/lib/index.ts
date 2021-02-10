import { CommandsController } from "./commands.controller";
import { CountCommand } from "./commands/count";
import { FilterCommand } from "./commands/filter";
import { ICountry } from "./interfaces";

export class App {

    private commandsController: CommandsController;

    constructor(data: ICountry[]) {
        this.commandsController = new CommandsController(data);
        this.commandsController.registerCommand(FilterCommand.$name, new FilterCommand());
        this.commandsController.registerCommand(CountCommand.$name, new CountCommand());
    }

    public executeCommand(param: string) {
        try {
            const [ commandName, commandParam ] = param.split('=').map(item => item.trim());
            if (commandName === '--help') {
                this.printHelp();
            } else {
                const countries = this.commandsController.executeCommand(commandName, commandParam);
                this.printResult(countries);
            }
        } catch (ex) {
            console.error('\n\t    error: ' + ex.message);
            this.printHelp();
        }
    }
    public printHelp() {
        console.log(
            `
            Usage: node app [options]
            
            Examples:
                - node app --filter=ry : Filtrer les pays
            
            Options:
                --filter=<value>       Filtrer des pays
                --count                Compter les personnes et les animaux
                --help                 Aide en ligne
            `
        );
    }
    private printResult(countries: ICountry[]) {
        console.log(JSON.stringify(countries, null, '  '));
    }
}