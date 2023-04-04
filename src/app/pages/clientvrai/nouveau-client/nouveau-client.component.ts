import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../service/client/client.service';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.scss']
})
export class NouveauClientComponent implements OnInit {

  clientFormGroup!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {

    this.clientFormGroup = this.fb.group({
      // code : this.fb.control(null, Validators.required),
      nom : this.fb.control(null, Validators.required),
      prenom : this.fb.control(null, Validators.required),
      telephone : this.fb.control(null, Validators.required),
      adresse : this.fb.control(null, Validators.required),
      ville : this.fb.control(null, Validators.required),
      pays : this.fb.control(null, Validators.required),
    });
  }

  cancelClick(): void {
    this.router.navigate(['dashboard/clients']);
  }

  handleAddClient() {
    let client = this.clientFormGroup.value;
    this.clientService.addNewClient(client).subscribe({
      next: (data) => {
        alert("Client added successfully");
        this.clientFormGroup.reset();
      }, error: err => {
        console.log(err);
      }
    })
  }

}
