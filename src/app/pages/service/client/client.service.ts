import { Injectable } from '@angular/core';
import { Client } from '../../model/client.model';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients!: Array<Client>;

  constructor() {
    this.clients = [
      {
        ID : UUID.UUID(), nom : "Kona", prenom : "Dave", telephone : 678587548, adresse : "4589 Douala", ville : "Douala", pays : "Cameroun"
      },
      {
        ID : UUID.UUID(), nom : "Kona", prenom : "Shecky", telephone : 698542152, adresse : "4421 Douala", ville : "Douala", pays : "Cameroun"
      },
    ];
   }

   public getAllClients(): Observable<Client[]>{
    return of(this.clients);
    }

    public deleteClient(id:string): Observable<boolean> {
      this.clients = this.clients.filter(client => client.ID != id);
      return of(true);
     }

     public updateClient(client: Client): Observable<Client> {
      this.clients = this.clients.map(c => (c.ID===client.ID)?client:c);
      return of(client);
     }

     getClient(id: string): Observable<Client> {
      let client = this.clients.find(client => client.ID === id);
      if (client === undefined) {
        return throwError(() => Error("Client not found"));
      }
      return of(client);
     }

     public addNewClient(client: Client): Observable<Client> {
      client.ID =UUID.UUID();
      this.clients.push(client);
      return of(client);
     }
  }
