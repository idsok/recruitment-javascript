import { ICommand, ICountry } from '../interfaces';

export class CountCommand implements ICommand {
    constructor() {}
    public execute(countries: ICountry[]): ICountry[] {
        return [];
    }
}