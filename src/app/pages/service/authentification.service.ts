import { Injectable } from '@angular/core';
import { AppUser } from '../model/user.model';
import { ReplaySubject, Observable,  of, throwError } from 'rxjs';
import {UUID} from "angular2-uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users: AppUser[]=[];
  authenticatedUser:AppUser | undefined;
  private authenticationState = new ReplaySubject<AppUser | null>(1);

  constructor() {
    this.users.push({userId: UUID.UUID(), username:"user", password:"user", roles:["USER"]})
    // this.users.push({userId : UUID.UUID(), username:"serveur", password:"ssss", roles:["USER","SERVEUR"]})
    // this.users.push({userId : UUID.UUID(), username:"livreur", password:"llll", roles:["USER","LIVREUR"]})
    this.users.push({userId : UUID.UUID(), username:"admin", password:"admin", roles:["ADMIN"]})
   }



public login( username: string, password: string):Observable<AppUser>{

  // Ici on envoie une requete vers notre back qui est le local
let appUser= this.users.find(u => u.username==username);

// On fait les tests
if(!appUser) {
  return throwError( ()=>new Error("Utilisateur inexistant"));
}
if(appUser.password != password){
  return throwError(()=>new Error("Mauvais mot de passe"));
}
return of(appUser);

}



public authenticateUser(appUser:AppUser):Observable<boolean>{
  this.authenticatedUser =appUser;
  this.authenticationState.next(this.authenticatedUser);
  localStorage.setItem("authUser",JSON.stringify( {username: appUser.username, roles:appUser.roles , jwt:"JWT_TOKEN"}));
  return of(true);
}

public hasroles(role:string):boolean{
 return this.authenticatedUser!.roles.includes(role)

}

getAuthenticationState(): Observable<AppUser | null> {
  return this.authenticationState.asObservable();
}

public isAuthenticated(){
  return this.authenticatedUser != undefined;
}



public logout(): Observable<boolean>{

  this.authenticatedUser=undefined;
  localStorage.removeItem("authUser");
  return of(true);

}

hasAnyAuthority(authorities: string[] | string | undefined): boolean {
  if (!this.authenticatedUser || !this.authenticatedUser.roles) {
    return false;
  }
  if (!Array.isArray(authorities)) {
    authorities = [authorities ?? ''];
  }
  return this.authenticatedUser.roles.some((authority: string) => authorities?.includes(authority ?? ''));
}

}
