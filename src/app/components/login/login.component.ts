import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { JwtToken } from 'src/app/models/Token';
import { UserService } from 'src/app/services/user.service';
//import { GetUserAction } from '../../ngrx/login.actions';
//import { LoginState, LoginStateEnum } from '../../ngrx/login.state';
import { AuthentificationService } from 'src/app/services/authentification.service';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //NgRx begin
  //currentUser$: Observable<LoginState> | null = null;
  //readonly loginStateEnum = LoginStateEnum;
  authForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public authentificationService: AuthentificationService,
  //  private store: Store<any>,
    private userServcie: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.store.subscribe((data: any) => {
    //   if (data.loginState.authUser.lenght != 0) {
    //     this.authenticationService.checkIfUserExists(this.authForm);
    //     //OU
    //     this.authenticationService.checkIfUserExists(data.loginState.authUser); //penser à changer le type d'argument de la methode...
    //   }
    //   // console.log(data.loginState.authUser);
    // });
  }

  // checkIfUserExists(authForm: FormGroup) {
  //   this.store.dispatch(new GetUserAction(authForm));
  //   //this.authenticationService.checkIfUserExists(authForm);
  // }

  authenticate(authForm: FormGroup) {
    this.userServcie.authenticate(authForm.value).subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', JSON.stringify(data));

      //TESTS
      for (let i = 0; i < localStorage.length; i++) {
        if (!Number(localStorage.key(i))) {
          let jwtToken = JSON.parse(
            String(localStorage.getItem(String(localStorage.key(i))))
          );
          console.log(jwtToken);
          let accessTokenStr = jwtToken["access-token"]
          let refreshTokenStr = jwtToken["refresh-token"]
          console.log('accessToken : ' + accessTokenStr);
          console.log('refreshToken : ' + refreshTokenStr);
        }
      }
      //END TEST

    });

    this.router.navigateByUrl('/');
  }

  //NgRx end
}
