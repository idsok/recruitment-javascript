import { App } from './lib';
import { data } from './data';

const app = new App(data);

const args: string[] = process.argv;

if (args.length === 3) {
    app.executeCommand(args[2]);
} else {
    app.printHelp();
}