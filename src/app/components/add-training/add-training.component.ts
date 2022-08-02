import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Training } from 'src/app/model/training.model';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  myForm:FormGroup;
  newTraining : Training | undefined;
  listCategories: Category[]  | undefined;
  error=null;

  constructor(public trainingsService: TrainingsService, private router : Router) {  
    let newTraining=new Training(1,"","",100,1, "unknown.png", new Category(0, ""));
   // let newTraining=this.trainingsService.getNewTraining();
    this.myForm= new FormGroup({
      name: new FormControl(newTraining.name),
      description: new FormControl(newTraining.description),
      price: new FormControl(newTraining.price),
      quantity: new FormControl(newTraining.quantity),
      imgUrl: new FormControl(newTraining.imgUrl)
    });
    this.getCategories();
    console.log(typeof(this.myForm.value.category));
  }

  ngOnInit(): void {
  }

  onAddTraining(form:FormGroup){
    console.log("type : " + typeof(form.value.category));
    this.newTraining = new Training(0, form.value.name, form.value.description, form.value.price, form.value.quantity, form.value.imgUrl, form.value.category);
    this.trainingsService.saveNewTraining(this.newTraining).subscribe({
      next: (data) => this.newTraining= data,
      error: (err) => this.error=err.message,
      complete: () => this.error =null
     })
     confirm("Valider l'ajout de la formation ?")
     this.router.navigateByUrl('/');
  }

  getCategories(){
    this.trainingsService.getCategories().subscribe({
      next: (data) => this.listCategories= data,
      error: (err) => this.error=err.message,
      complete: () => this.error =null 
    })
  }
}
