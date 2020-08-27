import { Stock } from "./Stock";

export class Ingredient {
    id?:number;
    name?:string;
    description?:string;
    cost?:number;
    stock?: Stock;
    type?:string;
    origin?:string;
}

