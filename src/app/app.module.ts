import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { FormComponent } from './components/authentificate/authentificate.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    NotFoundComponent,
    CustomerComponent,
    OrderComponent,
    FormComponent,
    AddTrainingComponent,
    UpdateTrainingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
