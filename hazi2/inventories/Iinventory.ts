import { Product } from "../classis/product";

export interface Iinventory{
    addOrder(product: Product): void;
    removeOrder(id: string): void;
    findOrderById(id: string, name: string): Product | undefined;
    listAllOrders(): Product[];


}