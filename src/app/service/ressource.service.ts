import {Injectable} from '@angular/core';
import {Ressource} from '../model/ressource.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})

export class RessourceService {
  apiURL: string = 'http://localhost:8080/ressources/api';

  listeRessource(): Observable<Ressource[]>{
    return this.http.get<Ressource[]>(this.apiURL);
  }

  ressources!: Ressource[];

  constructor(private http: HttpClient) {
   /* this.ressources = [
      {
        idRessource : 1,
        nomCreateur : "Mathieu",
        nomRessource : "Ressource 1",
        texteRessource : "Texte de la ressource 1",
        dateCreation : new Date("2021-04-21")
      },

      {
        idRessource : 2,
        nomCreateur : "Tony",
        nomRessource : "Ressource 2",
        texteRessource : "Texte de la ressource 2",
        dateCreation : new Date("2021-04-22")
      },

      {
        idRessource : 3,
        nomCreateur : "Julien",
        nomRessource : "Ressource 3",
        texteRessource : "Texte de la ressource 3",
        dateCreation : new Date("2021-04-23")
      }
    ];*/
  }

  /*listeRessources(): Ressource[]{
    return this.ressources;
  }*/

  ajouterRessource(rsce: Ressource /*ressource: Ressource*/): Observable<Ressource>{
    //this.ressources.push(ressource);
    return this.http.post<Ressource>(this.apiURL, rsce, httpOptions);
  }

  supprimerRessource(/*rsce: Ressource*/ id: number){
    //const index = this.ressources.indexOf(rsce, 0);
    //if (index > -1){
     // this.ressources.splice(index, 1);
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }


  consulterRessource(id: number): /*Ressource*/ Observable<Ressource>{
   // @ts-ignore
    //return this.ressources.find(rsce => rsce.idRessource == id);
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Ressource>(url);
  }

  trierRessources(){
    this.ressources = this.ressources.sort((n1, n2) => {
      if (n1.idRessource > n2.idRessource){
        return 1;
      }
      if (n1.idRessource < n2.idRessource) {
        return -1;
      }
      return 0;
    });
  }

  updateRessource(rsce: Ressource) : Observable<Ressource>{
    // this.supprimerRessource(id);
    // this.ajouterRessource(rsce);
    // this.trierRessources();
    return this.http.put<Ressource>(this.apiURL, rsce, httpOptions);
  }



}
