import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Router} from '@angular/router';
import {logging} from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  users: User[] = [
    {
      "username": "Mathieu",
      "password": "test",
      "roles": ['citoyen']
    },

    {
      "username": "Tony",
      "password": "test",
      "roles": ['supadmin']
    },

    {
      "username": "Florent",
      "password": "test",
      "roles": ['admin']
    },

    {
      "username": "Julien",
      "password": "test",
      "roles": ['moderateur']
    }
  ];


  public loggedUser!: string;
  public islogIn: boolean = false;
  public roles!:string[];


  constructor(private router: Router) {
  }

   onDeconnexion(){
    this.islogIn = false;
    //@ts-ignore
    this.loggedUser = undefined;
    //@ts-ignore
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLogIn', String(this.islogIn));
    this.router.navigate(['connexion']);
   }

   SignIn(user: User): boolean{
    let validUser: boolean = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password == curUser.password){
        validUser = true;
        this.loggedUser = curUser.username;
        this.islogIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLogIn', String(this.islogIn));
      }
    });

    return validUser;

   }

   isCitoyen(): boolean{
    if (!this.roles)
      return false;
    return (this.roles.indexOf('citoyen') >- 1);
   }

  isSupAdmin(): boolean{
    if (!this.roles)
      return false;
    return (this.roles.indexOf('supadmin') >- 1);
  }

  isAdmin(): boolean{
    if (!this.roles)
      return false;
    return (this.roles.indexOf('admin') >- 1);
  }

  isModerateur(): boolean{
    if (!this.roles)
      return false;
    return (this.roles.indexOf('moderateur') >- 1);
  }

   setLoggedUserFromLocalStorage(login: string){
    this.loggedUser = login;
    this.islogIn = true;
    this.getUserRoles(login);
   }

   getUserRoles(username: string) {
     this.users.forEach((curUser) => {
       if (curUser.username == username) {
         this.roles = curUser.roles;
       }

     });
   }
}
