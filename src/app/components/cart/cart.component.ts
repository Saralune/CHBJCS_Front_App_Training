import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { Order } from 'src/app/model/order.model';
import { OrderItem } from 'src/app/model/orderItem.model';
import { Training } from 'src/app/model/training.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CartService } from 'src/app/services/cart.service';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Training[] | undefined;
  customer: Customer | undefined;
  amount: number = 0;
  order: Order | undefined;
  orderItem: OrderItem | undefined;

  constructor(private cartService: CartService, private router: Router,
    private trainingService: TrainingsService,
    private authentificationService:AuthentificationService ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.amount = this.cartService.getAmount();
    this.customer = this.cartService.getCustomer();
  }

  onRemoveFromCart(training: Training) {
    this.cartService.removeTraining(training);
    this.cart = this.cartService.getCart();
    this.amount = this.cartService.getAmount();

  }

  onNewOrder() {
    if(this.authentificationService.connected==true)
  this.router.navigateByUrl('customer');
  else {
  alert("Connectez-vous!");
  this.router.navigateByUrl('form'); 
}
}

}




