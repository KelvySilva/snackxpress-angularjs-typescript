import { Composite } from "./Composite";
import { Product } from "./Product";

export class Recipe {
    id?:number;
    name?: string;
    composities?: Composite[];
    productFinal?: Product;
}