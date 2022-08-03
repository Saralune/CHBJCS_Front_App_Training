import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  myForm: FormGroup;
  listTrainings: Training[] | undefined;
  listCategories: Category[] | undefined;
  imgUrl = "";
  error = null;
  selectedFile=false;
  displayStyle = "none";
  displayBlur = "blur(0)"
  display = false
  problemAdmin = false
  file!: File;

  newTraining = {
    id: 0,
    name: "",
    description: "",
    price: 100,
    quantity: 1,
    imgUrl: "unknown.png",
    category: {} as Category
  };

  constructor(private router: Router,
    private trainingsService: TrainingsService, private authentificationService: AuthentificationService) {

    this.myForm = new FormGroup({
      name: new FormControl(this.newTraining.name),
      description: new FormControl(this.newTraining.description),
      price: new FormControl(this.newTraining.price),
      imgUrl: new FormControl(this.newTraining.imgUrl),
      category: new FormControl(this.newTraining.category)
    });
  }

  ngOnInit(): void {
    this.getAllTrainings();
    this.getCategory()
  }

  getCategory() {
    this.trainingsService.getCategories().subscribe({
      next: (data) => this.listCategories = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  getAllTrainings() {
    this.listTrainings = [];
    this.trainingsService.getTrainings().subscribe({
      next: (data) => this.listTrainings = data,
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
  }

  delItem(training: Training) {
    if (confirm("Voulez-vous vraiment supprimer cette formation?")) {
      this.trainingsService.deleteTraining(training).subscribe({
        next: (data) => console.log(data),
        error: (err) => this.error = err.message,
        complete: () => this.getAllTrainings(),
      });

    }
  }

  openPopup(training: Training) {
    this.displayStyle = "block";
    this.displayBlur = "blur(4px)"
    this.myForm = new FormGroup({
      name: new FormControl(training.name),
      description: new FormControl(training.description),
      price: new FormControl(training.price),
      quantity: new FormControl(training.quantity),
      imgUrl: new FormControl(training.imgUrl),
      category: new FormControl(training.category),

    })

    this.newTraining.imgUrl = training.imgUrl
    this.newTraining.id = training.id
    this.newTraining.category = training.category
  }

  closePopup() {
    this.displayStyle = "none";
    this.displayBlur = "blur(0)"
  }

  updateItem(form: FormGroup) {
    console.log(this.newTraining)
    if (confirm("Etes-vous sûr de vouloir modifier cette formation ?")) {
      this.newTraining.category = form.value.category
      this.newTraining.name = form.value.name
      this.newTraining.description = form.value.description
      this.newTraining.price = form.value.price
 
      if (this.selectedFile) {

        this.newTraining.imgUrl = this.file.name

    }

      this.trainingsService.uploadImage(this.file).subscribe({
        next: (data) => console.log(data)
      })
      this.trainingsService.saveNewTraining(this.newTraining).subscribe({
        next: (data) => console.log(data),
        complete: ()=>this.getAllTrainings()
      })
      this.closePopup();
       //this.router.navigateByUrl('/updateTraining')
    }
  }

  processFile(event: any) {
    // const file: File = event.target.files[0];
    this.file = event.target.files[0];
    // console.log(this.file.name)
    //this.imgUrl = this.file.name
    this.selectedFile=true;

  }
}
