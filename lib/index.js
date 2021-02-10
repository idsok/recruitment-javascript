"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const commands_controller_1 = require("./commands.controller");
const count_1 = require("./commands/count");
const filter_1 = require("./commands/filter");
class App {
    constructor(data) {
        this.commandsController = new commands_controller_1.CommandsController(data);
        this.commandsController.registerCommand(filter_1.FilterCommand.$name, new filter_1.FilterCommand());
        this.commandsController.registerCommand(count_1.CountCommand.$name, new count_1.CountCommand());
    }
    executeCommand(param) {
        try {
            const [commandName, commandParam] = param.split('=').map(item => item.trim());
            if (commandName === '--help') {
                this.printHelp();
            }
            else {
                const countries = this.commandsController.executeCommand(commandName, commandParam);
                this.printResult(countries);
            }
        }
        catch (ex) {
            console.error('\n\t    error: ' + ex.message);
            this.printHelp();
        }
    }
    printHelp() {
        console.log(`
            Usage: node app [options]
            
            Examples:
                - node app --filter=ry : Filtrer les pays
            
            Options:
                --filter=<value>       Filtrer des pays
                --count                Compter les personnes et les animaux
                --help                 Aide en ligne
            `);
    }
    printResult(countries) {
        console.log(JSON.stringify(countries, null, '  '));
    }
}
exports.App = App;
