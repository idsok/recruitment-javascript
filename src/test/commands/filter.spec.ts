import 'mocha';
import { expect} from 'chai';
import { data } from '../../data';
import { ICommand, ICountry } from '../../lib/interfaces';
import { FilterCommand } from '../../lib/commands/filter';

describe('Filter command', () => {

    const filterCommand: ICommand = new FilterCommand();

    it('Check the number of data objects with --filter=ry', () => {
        const countriesFound: ICountry[] = filterCommand.execute(data as Array<ICountry>, 'ry');

        expect(countriesFound.length, 'Number countries not equals 2').eq(2);

        expect(countriesFound[0].people.length, 'Number people not equals 1').eq(1);
        expect(countriesFound[1].people.length, 'Number people not equals 1').eq(1);

        expect(countriesFound[0].people[0].animals.length, 'Number animals not equals 1').eq(1);
        expect(countriesFound[1].people[0].animals.length, 'Number animals not equals 1').eq(1);
    });

    it('Check the number of data objects with --filter=zzz', () => {
        const countriesFound: ICountry[] = filterCommand.execute(data as Array<ICountry>, 'zzz');

        expect(countriesFound.length, 'Number countries not equals 0').eq(0);
    });

    it('Check filter parameter missing with --filter', () => {
        expect(() => filterCommand.execute(data as Array<ICountry>, null)).to.throw('filter parameter is required');
        expect(() => filterCommand.execute(data as Array<ICountry>, 123 as any)).to.throw('filter parameter should be a string');
    });
    
});