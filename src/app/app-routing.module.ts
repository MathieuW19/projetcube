import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourcesComponent } from './ressources/ressources.component';
import { CreerRessourceComponent } from './creer-ressource/creer-ressource.component';
import {UpdateRessourceComponent} from './update-ressource/update-ressource.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {CreerCompteComponent} from './creer-compte/creer-compte.component';
import {RessourceGuard} from './ressource.guard';

const routes: Routes = [
  { path: "ressources", component: RessourcesComponent },
  { path: "creation", component: CreerRessourceComponent, canActivate:[RessourceGuard] },
  { path: "updateRessource/:id", component: UpdateRessourceComponent },
  { path: "connexion", component: ConnexionComponent },
  {path: "creer-compte", component: CreerCompteComponent},
  { path: "app-forbidden", component: ForbiddenComponent },
  { path: "", redirectTo: "ressources", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
