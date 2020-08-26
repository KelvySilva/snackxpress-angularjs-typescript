import { Product } from "./Product";

export class MenuItem {
    category?:string;
    total?:number;
    subtotal?:number;
    discountAmount?: number;
    productList ?: Product[];
}