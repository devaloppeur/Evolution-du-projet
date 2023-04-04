import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Commande } from '../../model/commande.model';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private commandes!: Commande[];

  constructor() {

    this.commandes = [
      {
        ID : UUID.UUID(), client : "Kona", datecommande : "JJ/MM/AAAA", montanttotal: 155000, statutcommande : "Encour"
      },
      {
        ID : UUID.UUID(), client : "Kom", datecommande : "JJ/MM/AAA", montanttotal: 300000, statutcommande : "Encour"
      },
    ];

   }

   public getAllCommandes(): Observable<Commande[]>{
    return of(this.commandes);
    }


  public deleteCommande(id:string): Observable<boolean> {
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

}


