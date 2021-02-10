import 'mocha';
import { expect } from 'chai';
import { CommandsController } from '../lib/commands.controller';
import { FilterCommand } from '../lib/commands/filter';
import { CountCommand } from '../lib/commands/count';
import { data } from '../data';

describe('Commands controller', () => {
    
    it('check commands register', () => {
        
        const commandsController = new CommandsController(data);
        
        const commandsList = commandsController.getCommands();
        expect(commandsList.size, 'Commands size not 0').eq(0);

        commandsController.registerCommand(FilterCommand.name, new FilterCommand());
        commandsController.registerCommand(CountCommand.name, new CountCommand());

        expect(commandsList.size, 'Commands size not 2').eq(2);
        expect(commandsList.has(FilterCommand.name), 'Command filter not found').to.be.true;

        const filterCommand = commandsList.get(FilterCommand.name);
        expect(filterCommand).instanceof(FilterCommand);
    });

    it('check exectution of commands', () => {
        
        const commandsController = new CommandsController(data);
        commandsController.registerCommand(FilterCommand.name, new FilterCommand());
        commandsController.registerCommand(CountCommand.name, new CountCommand());

        // Filter command
        let countries = commandsController.executeCommand(FilterCommand.name, 'ry');
        expect(countries.length).eq(2);

        // Count command
        countries = commandsController.executeCommand(CountCommand.name);
        expect(countries.length).eq(5);

        // Command not supported
        let throwException = false;
        try {
            countries = commandsController.executeCommand('zzzzz');
        } catch (error) {
            throwException = true;
        }
        expect(throwException).to.be.true;
    });
});