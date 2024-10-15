export class Product {
    public id: string;
    public name: string;
    public price: number;
    public sub: string;

    constructor(id: string,name: string,price: number, sub: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.sub = sub;
    }
    

}