import { Stock } from "./Stock";

export class Product {
    id?:number;
    name?: string;
    description?: string;
    cost?: number;
    discount?: number;
    price?: number;
    stock?: Stock;
    type?: string;
    origin?: string;
}

