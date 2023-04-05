export class LigneCommande {
  constructor (
    public ID? : string,
    public codearticle? : string,
    public designation? : string,
    public categorie? : string,
    public quantite? : number,
    public prixunitaire? : number,
    public montanttotal? : number
  ) {

  }
}
