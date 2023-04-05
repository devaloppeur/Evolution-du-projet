import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../../model/commande.model';
import { LigneCommande } from '../../model/ligneCommande.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nouvelle-cmd-clt',
  templateUrl: './nouvelle-cmd-clt.component.html',
  styleUrls: ['./nouvelle-cmd-clt.component.scss']
})
export class NouvelleCmdCltComponent implements OnInit {

  ligneCommandes: Array<LigneCommande> = [];
  total: number = 0;
  client?: string = '';

  totalCommande: number = 0;
  ligneCommande= new LigneCommande();
  ligneCommandeFormGroup = this.fb.group({
    codearticle: [],
    designation: [],
    categorie:[],
    quantite:[],
    prixunitaire:[]

  })
  constructor(
    private router: Router,
    public fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  cancelClick(): void {
    this.router.navigate(['cmd']);
  }

  onAdd() {

    this.ligneCommande.codearticle= this.ligneCommandeFormGroup.get('codearticle')?.value ?? '',
    this.ligneCommande.designation= this.ligneCommandeFormGroup.get('designation')?.value ?? '',
    this.ligneCommande.categorie= this.ligneCommandeFormGroup.get('categorie')?.value ?? '',
    this.ligneCommande.quantite= this.ligneCommandeFormGroup.get('quantite')?.value ?? 0,
    this.ligneCommande.prixunitaire= this.ligneCommandeFormGroup.get('prixunitaire')?.value ?? 0,
    this.ligneCommande.montanttotal= this.ligneCommande?.quantite! * this.ligneCommande?.prixunitaire! ?? 0

    let client =document.getElementById('selectclient') as HTMLInputElement | null;

    this.client = client?.value;
    this.ligneCommandes.push(this.ligneCommande);

    for (let index = 0; index < this.ligneCommandes.length; index++) {
      // let element = this.ligneCommandes[index]?.montanttotal!;
      this.totalCommande = this.totalCommande + +this.ligneCommandes[index]?.montanttotal!;
    }
    this.total = this.total + this.ligneCommande.montanttotal;



    this.ligneCommandeFormGroup = this.fb.group({

      codearticle: [],
      designation: [],
      categorie:[],
      quantite:[],
      prixunitaire:[]

    })
  }

}
