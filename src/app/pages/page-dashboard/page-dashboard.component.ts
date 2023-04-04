import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  constructor(public authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(["/"]);
      }
    })
  }

}
