"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterCommand = void 0;
class FilterCommand {
    constructor() {
        this.name = '--filter';
    }
    execute(countries, filter) {
        const result = [];
        for (const country of countries) {
            let countryFound;
            for (const person of country.people) {
                const animals = person.animals.filter(animal => animal.name.includes(filter));
                if (animals.length) {
                    const newPerson = {
                        name: person.name,
                        animals: animals
                    };
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
exports.FilterCommand = FilterCommand;
