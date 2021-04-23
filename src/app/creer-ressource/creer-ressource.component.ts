import { Component, OnInit } from '@angular/core';
import {Ressource} from '../model/ressource.model';
import {RessourceService} from '../service/ressource.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creer-ressource',
  templateUrl: './creer-ressource.component.html',
  styleUrls: ['./creer-ressource.component.css']
})
export class CreerRessourceComponent implements OnInit {

  newRessource = new Ressource();


  constructor(private ressourceService: RessourceService, private router: Router) { }

  ngOnInit(): void {
  }

  addRessource(){
    /*this.ressourceService.ajouterRessource(this.newRessource);
    this.message = "La Ressource " + this.newRessource.nomRessource + " ajoutée avec succès !"*/

    this.ressourceService.ajouterRessource(this.newRessource)
      .subscribe(rsce => {
        console.log(rsce);
      });
    this.router.navigate(['ressources']);
  }

}
