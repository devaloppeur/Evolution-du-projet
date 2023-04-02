import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/pages/service/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthentificationService) {

  }

  ngOnInit(): void {
  }


}
