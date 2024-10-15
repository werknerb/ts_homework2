"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var OrderStat;
(function (OrderStat) {
    OrderStat[OrderStat["new"] = 0] = "new";
    OrderStat[OrderStat["process"] = 1] = "process";
    OrderStat[OrderStat["done"] = 2] = "done";
})(OrderStat || (OrderStat = {}));
class Order {
    constructor(orderid, product, orderStat) {
        this.orderid = orderid;
        this.product = product;
        this.orderStat = orderStat;
    }
}
exports.Order = Order;
