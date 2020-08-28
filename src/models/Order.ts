import { Client } from "./Client";
import { OrderItem } from "./OrderItem";

export class Order {
    id?:number;
    subtotal?:number;
    total?:number;
    discountAmount?:number;
    status?:string;
    client?:Client;
    itemList?: OrderItem[];
}