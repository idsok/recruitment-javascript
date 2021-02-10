"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const commands_controller_1 = require("../lib/commands.controller");
const filter_1 = require("../lib/commands/filter");
const count_1 = require("../lib/commands/count");
const data_1 = require("../data");
describe('Commands controller', () => {
    it('check commands register', () => {
        const commandsController = new commands_controller_1.CommandsController(data_1.data);
        const commandsList = commandsController.getCommands();
        chai_1.expect(commandsList.size, 'Commands size not 0').eq(0);
        commandsController.registerCommand(filter_1.FilterCommand.name, new filter_1.FilterCommand());
        commandsController.registerCommand(count_1.CountCommand.name, new count_1.CountCommand());
        chai_1.expect(commandsList.size, 'Commands size not 2').eq(2);
        chai_1.expect(commandsList.has(filter_1.FilterCommand.name), 'Command filter not found').to.be.true;
        const filterCommand = commandsList.get(filter_1.FilterCommand.name);
        chai_1.expect(filterCommand).instanceof(filter_1.FilterCommand);
    });
    it('check exectution of commands', () => {
        const commandsController = new commands_controller_1.CommandsController(data_1.data);
        commandsController.registerCommand(filter_1.FilterCommand.name, new filter_1.FilterCommand());
        commandsController.registerCommand(count_1.CountCommand.name, new count_1.CountCommand());
        // Filter command
        let countries = commandsController.executeCommand(filter_1.FilterCommand.name, 'ry');
        chai_1.expect(countries.length).eq(2);
        // Count command
        countries = commandsController.executeCommand(count_1.CountCommand.name);
        chai_1.expect(countries.length).eq(5);
        // Command not supported
        let throwException = false;
        try {
            countries = commandsController.executeCommand('zzzzz');
        }
        catch (error) {
            throwException = true;
        }
        chai_1.expect(throwException).to.be.true;
    });
});
