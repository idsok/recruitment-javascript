"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsController = void 0;
class CommandsController {
    constructor(data) {
        this.commands = new Map();
        this.data = data;
    }
    getCommands() {
        return this.commands;
    }
    registerCommand(name, command) {
        this.commands.set(name, command);
    }
    executeCommand(name, param) {
        const command = this.commands.get(name);
        if (!command) {
            throw new Error(`Command <${name}> not supported !`);
        }
        return command.execute(this.data, param);
    }
}
exports.CommandsController = CommandsController;
