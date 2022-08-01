import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from '../model/training.model';
import { AuthentificationService } from '../services/authentification.service';
import { CartService } from '../services/cart.service';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-training-by-category',
  templateUrl: './training-by-category.component.html',
  styleUrls: ['./training-by-category.component.css']
})
export class TrainingByCategoryComponent implements OnInit {

  listTrainings : Training[] | undefined;
  error=null;

  constructor(private cartService : CartService, private router : Router,
    private trainingsService:TrainingsService, private authentificationService :AuthentificationService) {
   }

  ngOnInit(): void {
  //  this.getTrainingsByCategory();
  }


  //getTrainingsByCategory(){
   // this.trainingsService.getTrainingsByCategoryId(this.catId).subscribe({
   //   next: (data) => this.listTrainings= data,
    //  error: (err) => this.error=err.message,
    //  complete: () => this.error =null
  //  })
 // }

}
