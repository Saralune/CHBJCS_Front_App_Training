import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  myForm:FormGroup;
  constructor(public trainingsService: TrainingsService, private router : Router) {  
    let newTraining=new Training(1,"","",100,1,"unknown.png");
   // let newTraining=this.trainingsService.getNewTraining();
    this.myForm= new FormGroup({
      name: new FormControl(newTraining.name),
      description: new FormControl(newTraining.description),
      price: new FormControl(newTraining.price),
      
  })}

  

  ngOnInit(): void {
  }

  onAddTraining(form:FormGroup){
    console.log(form.value);
   this.trainingsService.getNewTraining();
}
}
