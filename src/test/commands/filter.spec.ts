import 'mocha';
import * as chai from 'chai';
import { data } from '../../data';
import { ICommand, ICountry } from '../../lib/interfaces';
import { FilterCommand } from '../../lib/commands/filter';

const expect = chai.expect;
const assert = chai.assert;

describe('Filter command', () => {
    
    it('Check the number of data objects with filter=ry', () => {
        const filterCommand: ICommand = new FilterCommand();
        const result: ICountry[] = filterCommand.execute(data as Array<ICountry>, 'ry');
        expect(result.length, 'Number countries not equals 2').eq(2);
        expect(result[0].people.length, 'Number people not equals 1').eq(1);
        expect(result[1].people.length, 'Number people not equals 1').eq(1);
        expect(result[0].people[0].animals.length, 'Number animals not equals 1').eq(1);
        expect(result[1].people[0].animals.length, 'Number animals not equals 1').eq(1);
    });

    it('Check the number of data objects with filter=zzz', () => {
        const filterCommand: ICommand = new FilterCommand();
        const result: ICountry[] = filterCommand.execute(data as Array<ICountry>, 'zzz');
        expect(result.length, 'Number countries not equals 0').eq(0);
    });
});