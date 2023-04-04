import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../model/client.model';
import { ClientService } from '../../service/client/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  clientFormGroup!: FormGroup;
  client!: Client;
  clientId!: string;

  constructor(
    public clientService: ClientService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.clientId = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {

    this.clientService.getClient(this.clientId).subscribe({
      next: (client) => {
        this.client = client;
        this.clientFormGroup = this.fb.group({
          // code : this.fb.control(null, Validators.required),
          nom : this.fb.control(this.client.nom, Validators.required),
          prenom : this.fb.control(this.client.prenom, Validators.required),
          telephone : this.fb.control(this.client.telephone, Validators.required),
          adresse : this.fb.control(this.client.adresse, Validators.required),
          ville : this.fb.control(this.client.ville, Validators.required),
          pays : this.fb.control(this.client.pays, Validators.required),
        });
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  handleUpdateClient() {
    let a = this.clientFormGroup.value;
    a.ID = this.client.ID;
    this.clientService.updateClient(a).subscribe({
      next: (client) => {
        alert("Client update successfully");
        this.clientFormGroup.reset();
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  cancelClick(){
    this.router.navigate(['dashboard/clients']);
  }

}
