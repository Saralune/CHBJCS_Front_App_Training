import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './model/category.model';
import { Training } from './model/training.model';
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

  
 

  constructor(private authentificationService: AuthentificationService, private trainingsService: TrainingsService, private router:Router){}
  ngOnInit(): void {
    
  }

  listTrainings : Training[] | undefined;
  listCategories: Category[]  | undefined
  error=null;


  

  //onCategories(id:any){
   // this.getTrainingsByCategory(id);
   // this.router.navigateByUrl('trainings/'+id);
  
 // }
  
  

 

  onLogOut (){
    this.authentificationService.logOut();
  }
}


