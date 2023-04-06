import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Commande } from '../../model/commande.model';
import { UUID } from 'angular2-uuid';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private commandes!: Commande[];

  constructor(private http: HttpClient) {

   }

   public getAllCommandes(): Observable<Commande[]>{
    let host = environment.host;
      let listCommande;
      listCommande = this.http.get<Commande[]>(host+"/commandes");
      return listCommande;
    }


  public deleteCommande(id?:string): Observable<boolean> {
    this.commandes = this.commandes.filter(commande => commande.ID != id);
    return of(true);
   }

   getCommande(id: string): Observable<Commande> {
    let commande = this.commandes.find(commande => commande.ID === id);
    if (commande === undefined) {
      return throwError(() => Error("Client not found"));
    }
    return of(commande);
   }

   public updateCommandeClient(commande: Commande): Observable<Commande> {
    this.commandes = this.commandes.map(cc => (cc.ID===commande.ID)?commande:cc);
    return of(commande);
   }

   public save(commande: Commande): Observable<Commande> {
    console.log(commande);
    let host = environment.host;
    // let listCommande;
    return this.http.post<Commande>(host+"/commandes", commande);

   }

}


