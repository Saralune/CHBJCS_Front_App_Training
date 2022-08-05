import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  
  myCustomersNbr: number = 0;
  constructor(private http:HttpClient) {}

  getMyCustomersBnr() {
    let nbr = this.myCustomersNbr;
    return nbr;
  }

  public saveCustomer(customer: Customer):Observable<Customer> {
    console.log(customer);    
    return this.http.post<Customer>(environment.hostCust + '/save', customer);
  }

  // public authenticate(user: User):Observable<any> {
  //   const payload = new HttpParams()
  //     .set('username', user.username)
  //     .set('password', user.password);
  //   // let userStr = user.username;
  //   // let passwordStr = user.password;
  //   console.log("payload : " + payload);    
  //   console.log(user);
  //   //console.log("auth " + this.http.post(environment.hostAuth, payload));
    
  //  return this.http.post<User>(environment.hostAuth, {payload});

    
  // }


}
