"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
const data_1 = require("./data");
const app = new lib_1.App(data_1.data);
const args = process.argv;
if (args.length === 3) {
    app.executeCommand(args[2]);
}
else {
    app.printHelp();
}
