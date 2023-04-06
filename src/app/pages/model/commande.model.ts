import { LigneCommande } from './ligneCommande.model';
export class Commande {
  constructor(
  public ID?: string,
  public client? : string,
  public datecommande? : string,
  public montanttotal? : number,
  public statutcommande? : string,
  public ligneCommande?: LigneCommande
  ){
 }

}
