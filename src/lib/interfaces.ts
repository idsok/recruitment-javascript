
/******* Input data ***********/
export interface ICountry {
    name: string;
    people: IPeople[];
}

export interface IPeople {
    name: string;
    animals: IAnimal[];
}

export interface IAnimal {
    name: string;
}

/************ Command **************/

export interface ICommand {
    execute(countries: ICountry[], param?: string): ICountry[];
}