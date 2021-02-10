import { ICommand, ICountry } from '../interfaces';

export class FilterCommand implements ICommand {
    constructor() {}
    public execute(countriess: ICountry[], filter: string): ICountry[] {
        const result: ICountry[] = [];
        for (const item of countriess) {
            let country;
            for (const person of item.people) {
                const animals = person.animals.filter(animal => animal.name.includes(filter));
                if (animals.length) {
                    const people = {
                        name: person.name,
                        animals: animals
                    }
                    country = country || {
                        name: item.name,
                        people: []
                    };
                    country.people.push(people);
                }
            }
            if (country) {
                result.push(country);
            }
        }
        return result;
    }
}