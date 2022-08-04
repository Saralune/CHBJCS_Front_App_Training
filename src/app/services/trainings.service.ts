import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Training } from '../model/training.model';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';
import { Order } from '../model/order.model';
import { OrderItem } from '../model/orderItem.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  constructor(private http: HttpClient) { }

  public getTrainings(){
    return this.http.get<Training[]>(environment.host+"/trainings");
  }

  public getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(environment.host+"/categories");
  }

  public getTrainingsByCategoryId(catId:number){
    return this.http.get<Training[]>(environment.host+"/categories/"+ catId + "/trainings");
  }

  public deleteTraining (training: Training){
            //get access token from localstorage Headers:{auth == bearer}

    return this.http.delete<Training>(environment.host+"/trainings/"+training.id);
  }

  public saveNewTraining(training: Training){
    //token
    return this.http.post<Training>(environment.host+"/trainings", training);
  }

  public postOrder(order:any){
    //accestoken : string -> bearer
    console.log(order);
    return this.http.post<any>(environment.host+"/orders", order);
  }

  // upload img
  public uploadImage(file: File): Observable<Response> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(environment.host + "/uploadfile", formData)
  }

  public postUser(user:any){
    console.log(user);
    return this.http.post<any>("http://localhost:8080/auth/saveUser", user);
  }

}
