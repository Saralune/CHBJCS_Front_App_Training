import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
   ngForm:FormGroup
    display = false
    error=""
    data = {
        userName: "",
        password: "",
        active:true,
        role:[],
    }
    constructor(public cartService: CartService,
        private router: Router,
        private trainingService: TrainingsService) {

        this.ngForm = new FormGroup({
            userName: new FormControl(this.data.userName),
            password: new FormControl(this.data.password),   
        })
    }

    ngOnInit(): void {

    }

    onSaveUser(form: FormGroup) {
        console.log(form.value)
        if (form.valid) {
            this.display = true

            this.data.userName = form.value.userName
            this.data.password = form.value.password;
            this.trainingService.postUser(this.data)
                .subscribe({
                    next: (data) => console.log(data),
                    error: (err) => this.error = err.message,
            })
            setTimeout(() => {
                this.display = false
                this.router.navigateByUrl('login')
            }, 1500)
        }
    }
}