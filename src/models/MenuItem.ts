import { Product } from "./Product";

export class MenuItem {
    id?:number;
    category?:string;
    total?:number;
    subtotal?:number;
    discountAmount?: number;
    productList ?: Product[];
}