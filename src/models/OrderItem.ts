import { Product } from "./Product";

export class OrderItem {
    id?: number;
    subtotal?:number;
    total?:number;
    discount?:number;
    products?: Product[];
}