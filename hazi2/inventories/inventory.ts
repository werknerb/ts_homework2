import { Product } from "../classis/product";
import { Iinventory } from "../inventories/Iinventory";

export class Inventory implements Iinventory{
    private products: Product[] = [];


    addOrder(product: Product): void {
        this.products.push(product);
    }
    removeOrder(id: string): void{
        this.products = this.products.filter(product => product.id !== id) 
    }
    findOrderById(id: string, name: string): Product | undefined {
        return this.products.find(procuct => procuct.id === id || procuct.name === name)
    }
    listAllOrders(): Product[] {
        return this.products;
    }
    
}