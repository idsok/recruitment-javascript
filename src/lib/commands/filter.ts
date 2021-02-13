import { ICommand, ICountry, IPerson } from '../interfaces';

// Filter command implementation
export class FilterCommand implements ICommand {

    public static readonly $name: string = '--filter';

    constructor() {}

    public execute(countries: ICountry[], filter: string): ICountry[] {
        if (!filter) {
            throw new Error('filter parameter is required');
        }
        if (typeof filter !== 'string') {
            throw new Error('filter parameter should be a string');
        }
        const result: ICountry[] = [];
        for (const country of countries) {
            let countryFound: ICountry;
            for (const person of country.people) {
                const animals = person.animals.filter(animal => animal.name.includes(filter));
                if (animals.length) {
                    const newPerson: IPerson = {
                        name: person.name,
                        animals: animals
                    }
                    countryFound = countryFound || {
                        name: country.name,
                        people: []
                    };
                    countryFound.people.push(newPerson);
                }
            }
            if (countryFound) {
                result.push(countryFound);
            }
        }
        return result;
    }
}