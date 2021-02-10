import { ICommand, ICountry, IPerson } from '../interfaces';

export class FilterCommand implements ICommand {

    public readonly name: string = '--filter';

    constructor() {}

    public execute(countries: ICountry[], filter: string): ICountry[] {
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