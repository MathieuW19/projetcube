import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styles: [
  ]
})
export class ConnexionComponent implements OnInit {

  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou Mot de passe incorrect');
      this.erreur = 1;
  }

}
