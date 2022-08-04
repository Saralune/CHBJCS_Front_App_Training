import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-form',
  templateUrl: './authentificate.component.html',
  styleUrls: ['./authentificate.component.css']
})
export class FormComponent implements OnInit {
  myForm:FormGroup;
  listUsers:User[]|undefined;

  constructor(private authentificationService: AuthentificationService, private router:Router) { 
    let user=this.authentificationService.getUser();
    this.myForm= new FormGroup({
      email: new FormControl(user.username),
      pwd: new FormControl(user.password)
    })
  }

  ngOnInit(): void {
  }

  onConnect(myForm:FormGroup){
    this.authentificationService.connect(myForm.value.userName, myForm.value.password);
    //this.authentificationService.saveUser(new User(myForm.value.name,myForm.value.firstName, myForm.value.email, myForm.value.pwd));
    this.router.navigateByUrl('cart');
  }
}
