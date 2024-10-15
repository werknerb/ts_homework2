"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.products = [];
    }
    addOrder(product) {
        this.products.push(product);
    }
    removeOrder(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
    findOrderById(id, name) {
        return this.products.find(procuct => procuct.id === id || procuct.name === name);
    }
    listAllOrders() {
        return this.products;
    }
}
exports.Inventory = Inventory;
