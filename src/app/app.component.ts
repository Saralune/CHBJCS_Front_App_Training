import { Component, OnInit,DoCheck } from '@angular/core';
import { Category } from './model/category.model';
import { Training } from './model/training.model';
import { AuthentificationService } from './services/authentification.service';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  title = 'trainings-front-app';
  display = false
  loggin = true
  logout = false
  email = ""
  caddySize = 0
  
  listTrainings : Training[] | undefined;
  listCategories: Category[]  | undefined
  error=null;

  constructor(private authentificationService: AuthentificationService, private cartService: CartService) { }
  ngDoCheck(): void {
    this.caddySize = this.cartService.caddylenght()
  }
  
  ngOnInit(): void {
    this.showName()
    this.caddySize = this.cartService.caddylenght()
  }

  onConnectedAsAdmin():boolean{
    if(this.authentificationService.connectedAsAdmin()) return true; 
    else return false;
  }

  showName() {
    this.email = this.authentificationService.getUser().email
    if (this.email != "") {
      this.display = true
      this.loggin = false
      this.logout = true
    }
  }
  onLogOut (){
    this.authentificationService.logOut();
    this.display = false
    this.loggin = true
    this.logout = false
  }
}


