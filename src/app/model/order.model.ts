import { Customer } from "./customer.model";
import { OrderItem } from "./orderItem.model";
import { TrainingItem } from "./training-item.model";
import { Training } from "./training.model";

export class Order {
    id:number;
    date : Date;
    amount: number;
    customer: Customer;
    orderItems: OrderItem[];
 

    constructor(id:number, date:Date, amount:number,customer:Customer, orderItems: OrderItem[]){
      this.id=id;
      this.date=new Date();
      this.amount=amount;
      this.customer=customer;  
      this.orderItems=orderItems;
    }


    
};