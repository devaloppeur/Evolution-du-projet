import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../../model/commande.model';
import { LigneCommande } from '../../model/ligneCommande.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from '../../service/article/article.service';
import { Article } from '../../model/article.model';
import { CommandeService } from '../../service/commande/commande.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-nouvelle-cmd-clt',
  templateUrl: './nouvelle-cmd-clt.component.html',
  styleUrls: ['./nouvelle-cmd-clt.component.scss']
})
export class NouvelleCmdCltComponent implements OnInit {

  ligneCommandes: Array<LigneCommande> = [];
  total: number = 0;
  client?: string = '';
  listArticle:Article[]= [];
  commande = new Commande();

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
    public fb : FormBuilder,
    private articleService: ArticleService,
    private commandeService: CommandeService
  ) { }

  ngOnInit(): void {
    this.onSelectArticle();
  }

  cancelClick(): void {
    this.router.navigate(['cmd']);
  }

  onAdd() {

    this.ligneCommande.ID=UUID.UUID();
    this.ligneCommande.codearticle= this.ligneCommandeFormGroup.get('codearticle')?.value ?? '';
    this.ligneCommande.designation= this.ligneCommandeFormGroup.get('designation')?.value ?? '';
    this.ligneCommande.categorie= this.ligneCommandeFormGroup.get('categorie')?.value ?? '';
    this.ligneCommande.quantite= this.ligneCommandeFormGroup.get('quantite')?.value ?? 0;
    this.ligneCommande.prixunitaire= this.ligneCommandeFormGroup.get('prixunitaire')?.value ?? 0;
    this.ligneCommande.montanttotal= this.ligneCommande?.quantite! * this.ligneCommande?.prixunitaire! ?? 0;

    let client =document.getElementById('selectclient') as HTMLInputElement | null;

    this.client = client?.value;
    this.ligneCommandes.push(this.ligneCommande);

    for (let index = 0; index < this.ligneCommandes.length; index++) {
      // let element = this.ligneCommandes[index]?.montanttotal!;
      this.totalCommande = this.totalCommande + +this.ligneCommandes[index]?.montanttotal!;
    }
    this.total = this.total + this.ligneCommande.montanttotal;


    this.commande.ID=UUID.UUID();
    this.commande.client = this.client;
    this.commande.montanttotal = this.totalCommande;
    this.commande.ligneCommande = this.ligneCommande;



    this.ligneCommandeFormGroup = this.fb.group({

      codearticle: [],
      designation: [],
      categorie:[],
      quantite:[],
      prixunitaire:[]

    })
  }

  onSelectCommande(event:any){
    console.log(event.target.value);
    for (let index = 0; index < this.listArticle.length; index++) {
      if (this.listArticle[index].id === event.target.value) {
        const codearticle =document.getElementById('codearticle') as HTMLInputElement;
        codearticle.value = this.listArticle[index]?.code;

        const designation =document.getElementById('designation') as HTMLInputElement;
        designation.value = this.listArticle[index]?.code;
        const categorie =document.getElementById('categorie') as HTMLInputElement;
        categorie.value = this.listArticle[index]?.code;

        console.log(this.listArticle[index].id);
        // this.ligneCommandeFormGroup.get(['codearticle'])?.setValue(this.listArticle[index].code);
        // this.ligneCommandeFormGroup.get(['designation'])?.setValue(this.listArticle[index].designation);
        // this.ligneCommandeFormGroup.get(['categorie'])?.setValue(this.listArticle[index].categorie);
      }

    }



  }

  onSelectArticle() {
    this.articleService.getAllArticles().subscribe({
      next: (res) => {
        this.listArticle = res;
      }
    })
  }

  onSave() {
    console.log(this.commande);
    this.commandeService.save(this.commande);
  }

}
