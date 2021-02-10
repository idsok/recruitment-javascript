"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai = require("chai");
const data_1 = require("../../data");
const count_1 = require("../../lib/commands/count");
const expect = chai.expect;
const assert = chai.assert;
describe('Count command', () => {
    it('check the number of items found', () => {
        const countCommand = new count_1.CountCommand();
        const countries = countCommand.execute(data_1.data);
        expect(countries.length, 'Number countries not equals 5').eq(5);
        expect(countries[0].name).to.be.equal(`${data_1.data[0].name} [${data_1.data[0].people.length}]`);
        expect(countries[0].people[0].name).to.be.equal(`${data_1.data[0].people[0].name} [${data_1.data[0].people[0].animals.length}]`);
        expect(countries[1].name).to.be.equal(`${data_1.data[0].name} [${data_1.data[1].people.length}]`);
        expect(countries[1].people[0].name).to.be.equal(`${data_1.data[0].people[1].name} [${data_1.data[0].people[0].animals.length}]`);
        expect(countries[2].name).to.be.equal(`${data_1.data[0].name} [${data_1.data[2].people.length}]`);
        expect(countries[2].people[0].name).to.be.equal(`${data_1.data[0].people[0].name} [${data_1.data[2].people[0].animals.length}]`);
    });
});
