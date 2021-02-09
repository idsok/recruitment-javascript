import { ICommand, ICountry } from '../interfaces';

export class FilterCommand implements ICommand {
    constructor() {}
    public execute(countries: ICountry[]): ICountry[] {
        return []
    }
}