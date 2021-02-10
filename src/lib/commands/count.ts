import { ICommand, ICountry } from '../interfaces';

export class CountCommand implements ICommand {

    public readonly name: string = '--count';

    constructor() {}

    public execute(countries: ICountry[]): ICountry[] {
        const result: ICountry[] = [];
        for (const country of countries) {
            const nbPeople = country.people.length;
            const newCountry: ICountry = {
                name: `${ country.name } [${ nbPeople }]`,
                people: []
            }
            for (const person of country.people) {
                const nbAnimals = person.animals.length;
                newCountry.people.push({
                    name: `${ person.name } [${ nbAnimals }]`,
                    animals: person.animals
                });
            }
            result.push(newCountry);
        }
        return result;
    }
}