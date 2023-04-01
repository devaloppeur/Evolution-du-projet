import { Component, OnInit } from '@angular/core';
import { NouvelUtilisateurComponent } from '../nouvel-utilisateur/nouvel-utilisateur.component';
import { Router, Routes } from '@angular/router';
import { literalMap } from '@angular/compiler';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {

  }
  NouvelUtilisateurNavigate(){
    this.router.navigate(['/nouvel-utilisateur']);

  }
}
