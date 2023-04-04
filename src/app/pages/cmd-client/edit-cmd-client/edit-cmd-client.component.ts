import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commande } from '../../model/commande.model';
import { CommandeService } from '../../service/commande/commande.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-cmd-client',
  templateUrl: './edit-cmd-client.component.html',
  styleUrls: ['./edit-cmd-client.component.scss']
})
export class EditCmdClientComponent implements OnInit {

  commandeClientFormGroup!: FormGroup;
  commande!: Commande;
  commandeId!: string;

  constructor(
    public commandeService: CommandeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.commandeId = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {

    this.commandeService.getCommande(this.commandeId).subscribe({
      next: (commande) => {
        this.commande = commande;
        this.commandeClientFormGroup = this.fb.group({
          // code : this.fb.control(null, Validators.required),
          client : this.fb.control(this.commande.client, Validators.required),
          datecommande : this.fb.control(this.commande.datecommande, Validators.required),
          montanttotal : this.fb.control(this.commande.montanttotal, Validators.required),
          statutcommande : this.fb.control(this.commande.statutcommande, Validators.required)
        });
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  handleUpdateCommandeClient() {
    let a = this.commandeClientFormGroup.value;
    a.ID = this.commande.ID;
    this.commandeService.updateCommandeClient(a).subscribe({
      next: (commande) => {
        alert("Commande update successfully");
        this.commandeClientFormGroup.reset();
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  cancelClick(){
    this.router.navigate(['dashboard/cmd']);
  }

}
