"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountCommand = void 0;
class CountCommand {
    constructor() { }
    execute(countries) {
        const result = [];
        for (const country of countries) {
            const nbPeople = country.people.length;
            const newCountry = {
                name: `${country.name} [${nbPeople}]`,
                people: []
            };
            for (const person of country.people) {
                const nbAnimals = person.animals.length;
                newCountry.people.push({
                    name: `${person.name} [${nbAnimals}]`,
                    animals: person.animals
                });
            }
            result.push(newCountry);
        }
        return result;
    }
}
exports.CountCommand = CountCommand;
CountCommand.$name = '--count';
