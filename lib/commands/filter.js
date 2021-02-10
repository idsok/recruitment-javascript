"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterCommand = void 0;
class FilterCommand {
    constructor() { }
    execute(countriess, filter) {
        const result = [];
        for (const item of countriess) {
            let country;
            for (const person of item.people) {
                const animals = person.animals.filter(animal => animal.name.includes(filter));
                if (animals.length) {
                    const people = {
                        name: person.name,
                        animals: animals
                    };
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
exports.FilterCommand = FilterCommand;
