import { Injectable } from '@angular/core';
import { LigneCommande } from '../../model/ligneCommande.model';
import { Observable, of, throwError } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class LignecommandeService {

  ligneCommandes!: LigneCommande[];

  constructor() {
    this.ligneCommandes = [
      {
        ID : UUID.UUID(), codearticle : '2222', designation : "Djino", categorie : "Boisson", quantite : 5, prixunitaire : 800, montanttotal : 4000
      },
      {
        ID : UUID.UUID(), codearticle : '8874', designation : "Ndolet", categorie : "Plat", quantite : 2, prixunitaire : 1500, montanttotal : 3000
      },
    ];
  }

  public deleteLigneCommande(id:string): Observable<boolean> {
    this.ligneCommandes = this.ligneCommandes.filter(ligneCommande => ligneCommande.ID != id);
    return of(true);
   }

   public getAllLigneCommande(): Observable<LigneCommande[]>{
    return of(this.ligneCommandes);
    }

    getLigneCommande(id: string): Observable<LigneCommande> {
      let ligneCommande = this.ligneCommandes.find(ligneCommande => ligneCommande.ID === id);
      if (ligneCommande === undefined) {
        return throwError(() => Error("Client not found"));
      }
      return of(ligneCommande);
     }

     public updateLigneCommande(ligneCommande: LigneCommande): Observable<LigneCommande> {
      this.ligneCommandes = this.ligneCommandes.map(c => (c.ID===ligneCommande.ID)?ligneCommande:c);
      return of(ligneCommande);
     }
}
