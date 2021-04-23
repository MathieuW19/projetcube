import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { CreerRessourceComponent } from './creer-ressource/creer-ressource.component';
import {FormsModule} from '@angular/forms';
import { UpdateRessourceComponent } from './update-ressource/update-ressource.component';
import {HttpClientModule} from '@angular/common/http';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    RessourcesComponent,
    CreerRessourceComponent,
    UpdateRessourceComponent,
    ConnexionComponent,
    CreerCompteComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
