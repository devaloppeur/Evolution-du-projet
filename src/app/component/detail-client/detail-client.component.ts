import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/pages/model/client.model';
import { AuthentificationService } from 'src/app/pages/service/authentification.service';
import { ClientService } from 'src/app/pages/service/client/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  errorMessage!: string;
  clients!: Array<Client>;

  constructor(
    public clientService: ClientService,
    public authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.handleGetAllClients();
  }

  handleGetAllClients() {

    this.clientService.getAllClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handleDeleteClient(client: Client) {
    let conf=confirm("Are you sure?")
    if (conf==false) return;
     this.clientService.deleteClient(client.ID).subscribe({
      next: (data) => {
        // this.handleGetAllArticles();
        let index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
      }
     })
  }

  handleEditClient(client: Client) {
    this.router.navigateByUrl("/dashboard/editclient/"+ client.ID);
  }


}
