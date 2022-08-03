import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/category.model';
import { Training } from '../model/training.model';
import { AuthentificationService } from '../services/authentification.service';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent implements OnInit {
  listTrainings : Training[] | undefined;
  listCategories: Category[]  | undefined
  error=null;
  

  constructor( private router : Router,
    private trainingsService:TrainingsService, private authentificationService :AuthentificationService) {
   }

  ngOnInit(): void {
    this.getAllTrainings();
    this.getCategory()
    
  }


  getCategory(){
    this.trainingsService.getCategories().subscribe({
      next: (data) => this.listCategories= data,
      error: (err) => this.error=err.message,
      complete: () => this.error =null 
    })
  }

 getAllTrainings(){
  this.listTrainings=[];
   this.trainingsService.getTrainings().subscribe({
     next: (data) => this.listTrainings= data,
     error: (err) => this.error=err.message,
     complete: () => this.error =null
   })
 }

 delItem(training:Training){
  if(confirm("Voulez-vous vraiment supprimer cette formation?")){
    this.trainingsService.deleteTraining(training).subscribe({
      next: (data) => console.log(data),
      error: (err) => this.error=err.message,
      complete:() => this.getAllTrainings(),
    });

  }
 }

}
