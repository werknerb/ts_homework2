import { Product } from "./product";


enum OrderStat {
    new, 
    process,
    done,

}
export class Order{
    constructor(private orderid: string,
                public product: Product[],
                private orderStat: OrderStat
                ) {}    
    
    
}
