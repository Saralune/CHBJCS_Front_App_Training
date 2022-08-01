export class Training {
    id : number;
    name : string;
    description : string;
    price : number;
    quantity : number;
  static id: number;
  static quantity: number;

    constructor(id:number,name:string,description:string,price:number, quantity:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
};