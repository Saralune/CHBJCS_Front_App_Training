import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dateOrder : Date = new Date();
  orderId:number;

  constructor(public cartService : CartService, private router : Router,
              public trainingService: TrainingsService) {
                this.orderId=0;
               }

  ngOnInit(): void {
  }

  onOrder(){

if(confirm("Etes-vous sûr de passer commande?")){ let order= {
  date: new Date(),
  amount: this.cartService.getAmount(),
  customer:this.cartService.getCustomer(),
  orderItems:this.cartService.getCart(),

}


this.trainingService.postOrder(order).subscribe({
  next: (data) => {
    this.orderId=data;
    //console.log(data);
  }

});

  
  setTimeout(() => {
    alert("Commande validée, voici votre numéro de commande :"+this.orderId);
    this.cartService.clear();
    this.router.navigateByUrl('');
   }, 1500)
}
    
  }
}
