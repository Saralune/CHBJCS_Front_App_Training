export class Training {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imgUrl:string
  static id: number;
  static quantity: number;

  constructor(id: number, name: string, description: string, price: number, quantity: number,imgUrl:string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.imgUrl=imgUrl
  }
};