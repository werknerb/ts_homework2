
export class User{
    private id: string;
    public name: string;
    private email: string;

    constructor(id: string,name: string,email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    }

}