import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  connected: boolean = false;

  private users = [
    { email: "g@aol.com", pwd: "0000", roles: ['ADMIN'] },
    { email: "j@aol.com", pwd: "0000", roles: ['USER'] },
    { email: "p@aol.com", pwd: "1234", roles: ['USER'] }
  ];

  constructor(private http: HttpClient) { }

  public connect(email: string, pwd: string) {
   
    this.users.forEach(element => {
      if (element.email == email && element.pwd == pwd) {
        alert("Vous êtes connectés en tant que " + element.email);
        this.connected = true;
        this.saveUser(new User(element.email, element.pwd, element.roles));
      }
    });
    if (this.connected == false) alert("Connexion impossible, identifiants incorrects");
    
  }

  getUser(): User {
    let user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return new User("", "", []);
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem('user');
    alert("Vous êtes déconnecté!")
  }

  connectedAsAdmin(): boolean {
    let user = localStorage.getItem('user');
    if (user) {
     let userModel: User =JSON.parse(user);
    for(let i=0;i<userModel.roles.length;i++)
    if (userModel.roles [i]== 'ADMIN') return true;
    };
    return false;

    }

    getloginError(): boolean{
      //TODO
      return true;
    }
    
  }



