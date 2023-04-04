import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/pages/model/commande.model';
import { AuthentificationService } from 'src/app/pages/service/authentification.service';
import { CommandeService } from '../../pages/service/commande/commande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cmd-clt',
  templateUrl: './detail-cmd-clt.component.html',
  styleUrls: ['./detail-cmd-clt.component.scss']
})
export class DetailCmdCltComponent implements OnInit {

  commandes!: Array<Commande>;
  errorMessage!: string;

  constructor(
    public authService: AuthentificationService,
    public commandeService: CommandeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.handleGetAllCommandes();
  }

  handleGetAllCommandes() {

    this.commandeService.getAllCommandes().subscribe({
      next: (data) => {
        this.commandes = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handleDeleteCommande(commande: Commande) {
    let conf=confirm("Are you sure?")
    if (conf==false) return;
     this.commandeService.deleteCommande(commande.ID).subscribe({
      next: (data) => {
        // this.handleGetAllArticles();
        let index = this.commandes.indexOf(commande);
        this.commandes.splice(index, 1);
      }
     })
  }

  handleEditCommande(commande: Commande) {
    this.router.navigateByUrl("/dashboard/editcmdclient/"+ commande.ID);
  }

}
