import { Component, OnInit } from '@angular/core';
import {Ressource} from '../model/ressource.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RessourceService} from '../service/ressource.service';

@Component({
  selector: 'app-update-ressource',
  templateUrl: './update-ressource.component.html',
  styles: [
  ]
})
export class UpdateRessourceComponent implements OnInit {

  currentRessource = new Ressource();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ressourceService: RessourceService) {
  }

  ngOnInit(){
    //this.currentRessource = this.ressourceService.consulterRessource(this.activatedRoute.snapshot.params.id);
    this.ressourceService.consulterRessource(this.activatedRoute.snapshot.params.id).
    subscribe(rsce => { this.currentRessource = rsce; }) ;

  }

  updateRessource(){
    //this.ressourceService.updateRessource(this.currentRessource);
    //this.router.navigate(['ressources']);
    this.ressourceService.updateRessource(this.currentRessource).subscribe(rsce => {
      this.router.navigate(['ressources']);
    }, (error) => { alert("Problème lors de la modification"); }
    );
  }
}
