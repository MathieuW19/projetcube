import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cube';

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(){
    let isLogIn: string;
    let loggedUser: string;
    //@ts-ignore
    isLogIn = localStorage.getItem('isLogIn');
    //@ts-ignore
    loggedUser = localStorage.getItem('loggedUser');
    if (isLogIn!="true" || !loggedUser)
      this.router.navigate(['/connexion']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
}
