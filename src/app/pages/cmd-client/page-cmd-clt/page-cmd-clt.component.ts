import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt',
  templateUrl: './page-cmd-clt.component.html',
  styleUrls: ['./page-cmd-clt.component.scss']
})
export class PageCmdCltComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nouvelleCommande(): void {

    this.router.navigate(['dashboard/nouvellecommande']);
  }

}
