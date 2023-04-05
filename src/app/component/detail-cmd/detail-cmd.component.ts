import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LigneCommande } from 'src/app/pages/model/ligneCommande.model';
import { AuthentificationService } from 'src/app/pages/service/authentification.service';
import { LignecommandeService } from 'src/app/pages/service/lignecommande/lignecommande.service';

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrls: ['./detail-cmd.component.scss']
})
export class DetailCmdComponent implements OnInit {

  ligneCommandes!: LigneCommande[];
  errorMessage!: string;
  constructor(
    public authService: AuthentificationService,
    public ligneCommandeService: LignecommandeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.handleGetAllLigneCommande();
  }

  handleGetAllLigneCommande() {

    this.ligneCommandeService.getAllLigneCommande().subscribe({
      next: (data) => {
        this.ligneCommandes = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handleDeleteLigneCommande(ligneCommande: LigneCommande) {
    let conf=confirm("Are you sure?")
    if (conf==false) return;
     this.ligneCommandeService.deleteLigneCommande(ligneCommande?.ID).subscribe({
      next: (data) => {
        // this.handleGetAllArticles();
        let index = this.ligneCommandes.indexOf(ligneCommande);
        this.ligneCommandes.splice(index, 1);
      }
     })

    }

    handleEditLigneCommande(ligneCommande: LigneCommande) {
      this.router.navigateByUrl("/dashboard/editlignecmd/"+ ligneCommande.ID);
    }

}
