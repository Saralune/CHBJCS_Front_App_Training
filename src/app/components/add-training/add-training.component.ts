import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  myForm: FormGroup;
  //newTraining: Training | undefined;
  listCategories: Category[] | undefined;
  error = null;
  file!: File;
  imgUrl = ""

  newTraining = {
    id: 0,
    name: "",
    description: "",
    price: 100,
    quantity: 1,
    imgUrl: "unknown.png",
    category: {} as Category
  };

  constructor(public trainingsService: TrainingsService, private router: Router) {
    this.myForm = new FormGroup({
      name: new FormControl(this.newTraining.name),
      description: new FormControl(this.newTraining.description),
      price: new FormControl(this.newTraining.price),
      imgUrl: new FormControl(this.newTraining.imgUrl),
      category: new FormControl(this.newTraining.category)
    });

  }

  ngOnInit(): void {
    this.getCategories();
  }

  onAddTraining(form: FormGroup) {
  
  

    console.log(this.newTraining)

    if (confirm("Valider l'ajout de la formation ?")) {

      this.newTraining.category = form.value.category
      this.newTraining.name = form.value.name
      this.newTraining.description = form.value.description
      this.newTraining.price = form.value.price
      this.newTraining.imgUrl = this.imgUrl

    this.trainingsService.uploadImage(this.file).subscribe({
       next:(data)=>console.log(data)
    })
    this.trainingsService.saveNewTraining(this.newTraining).subscribe({
      next: (data) => console.log(data) 
    })

      this.router.navigateByUrl('/')
    }
  }

  getCategories() {
    this.trainingsService.getCategories().subscribe({
      next: (data) => this.listCategories = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }
  /// img 
  processFile(event: any) {
    // const file: File = event.target.files[0];
    this.file = event.target.files[0];
    // console.log(this.file.name)
    this.imgUrl = this.file.name

  }
  ////////////////
}
