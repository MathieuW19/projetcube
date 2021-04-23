import { Component, OnInit } from '@angular/core';
import { Ressource } from '../model/ressource.model';
import {RessourceService} from '../service/ressource.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {

  ressources!: Ressource[];

  constructor(private ressourceService: RessourceService, private router: Router, public authService: AuthService) {
    //this.ressources = ressourceService.listeRessource();
  }

  ngOnInit(): void {
    this.ressourceService.listeRessource().subscribe(rsce => {
      console.log(rsce);
      this.ressources = rsce;
    });
  }

  supprimerRessource(ressource: Ressource){
    //let conf = confirm("Etes-vous sûr ?");
    //if (conf){
    //this.ressourceService.supprimerRessource(ressource);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.ressourceService.supprimerRessource(ressource.idRessource).subscribe(() => {
        console.log("Produit Supprimé");
      });
    this.router.navigate(['ressources']).then(() => {
      this.SupprimerProduitDuTableau(ressource);
    });
  }

  SupprimerProduitDuTableau(rsce: Ressource) {
    this.ressources.forEach((cur, index) => {
      if (rsce.idRessource === cur.idRessource) {
        this.ressources.splice(index, 1);
      }
    });
  }
}
