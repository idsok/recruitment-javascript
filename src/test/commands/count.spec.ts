import 'mocha';
import * as chai from 'chai';
import { data } from '../../data';
import { ICommand, ICountry } from '../../lib/interfaces';
import { CountCommand } from '../../lib/commands/count';

const expect = chai.expect;
const assert = chai.assert;

describe('Count command', () => {
    
    it('check the number of items found', () => {
        const countCommand: ICommand = new CountCommand();
        const countries: ICountry[] = countCommand.execute(data as Array<ICountry>);

        expect(countries.length, 'Number countries not equals 5').eq(5);

        expect(countries[0].name).to.be.equal(`${ data[0].name } [${ data[0].people.length }]`);
        expect(countries[0].people[0].name).to.be.equal(`${ data[0].people[0].name } [${ data[0].people[0].animals.length }]`);

        expect(countries[1].name).to.be.equal(`${ data[0].name } [${ data[1].people.length }]`);
        expect(countries[1].people[0].name).to.be.equal(`${ data[0].people[1].name } [${ data[0].people[0].animals.length }]`);

        expect(countries[2].name).to.be.equal(`${ data[0].name } [${ data[2].people.length }]`);
        expect(countries[2].people[0].name).to.be.equal(`${ data[0].people[0].name } [${ data[2].people[0].animals.length }]`);
    });
});