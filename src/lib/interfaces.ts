
/******* Input data ***********/
export interface ICountry {
    name: string;
    people: IPerson[];
}

export interface IPerson {
    name: string;
    animals: IAnimal[];
}

export interface IAnimal {
    name: string;
}

/************ Command **************/

export interface ICommand {
    readonly name: string;

    execute(countries: ICountry[], param?: string): ICountry[];
}