import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LigneCommande } from '../../model/ligneCommande.model';
import { LignecommandeService } from '../../service/lignecommande/lignecommande.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ligne-cmd',
  templateUrl: './edit-ligne-cmd.component.html',
  styleUrls: ['./edit-ligne-cmd.component.scss']
})
export class EditLigneCmdComponent implements OnInit {

  ligneCommandeFormGroup!: FormGroup;
  ligneCommande!: LigneCommande;
  ligneCommandeId!: string;

  constructor(
    public ligneCommandeService: LignecommandeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.ligneCommandeId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.ligneCommandeService.getLigneCommande(this.ligneCommandeId).subscribe({
      next: (ligneCommande) => {
        this.ligneCommande = ligneCommande;
        this.ligneCommandeFormGroup = this.fb.group({
          // code : this.fb.control(null, Validators.required),
          codearticle : this.fb.control(this.ligneCommande.codearticle, Validators.required),
          designation : this.fb.control(this.ligneCommande.designation, Validators.required),
          categorie : this.fb.control(this.ligneCommande.categorie, Validators.required),
          quantite : this.fb.control(this.ligneCommande.quantite, Validators.required),
          prixunitaire : this.fb.control(this.ligneCommande.prixunitaire, Validators.required),
          montanttotal : this.fb.control(this.ligneCommande.montanttotal, Validators.required),
        });
      }, error: (err) => {
        console.log(err);
      }
    });

  }

  handleUpdateLigneCommande() {
    let a = this.ligneCommandeFormGroup.value;
    a.ID = this.ligneCommande.ID;
    this.ligneCommandeService.updateLigneCommande(a).subscribe({
      next: (ligneCommande) => {
        alert("Ligne commande update successfully");
        this.ligneCommandeFormGroup.reset();
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  cancelClick(){
    this.router.navigate(['dashboard/cmd']);
  }

}
