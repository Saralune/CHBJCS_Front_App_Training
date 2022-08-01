import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user.model';
import { AuthentificationService } from './services/authentification.service';
import { TrainingsService } from './services/trainings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trainings-front-app';
  display = false
  loggin = true
  logout = false
  email = ""

  constructor(private authentificationService: AuthentificationService){}
  ngOnInit(): void {
    this.showName()
  }

  showName() {
    this.email = this.authentificationService.getUser().email
    if (this.email != "unknown") {
      this.display = true
      this.loggin = false
      this.logout = true
    }
  }
  onLogOut (){
    this.authentificationService.logOut();
  }
}


