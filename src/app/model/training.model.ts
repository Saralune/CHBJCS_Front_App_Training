import { Category } from "./category.model";

export class Training {
    id : number;
    name : string;
    description : string;
    price : number;
    quantity : number;
    imgUrl : String;
    category: Category;
  // static id: number;
  // static quantity: number;

    constructor(id:number,name:string,description:string,price:number, quantity:number, imgUrl: String, category: Category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imgUrl = imgUrl;
        this.category = category;
    }
};