import { Component, OnInit } from '@angular/core';
import { Menu } from './menu-vrai';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-vrai',
  templateUrl: './menu-vrai.component.html',
  styleUrls: ['./menu-vrai.component.scss']
})
export class MenuVraiComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
    id: '0',
    titre: 'Dashboard',
    icon: 'fa fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '01',
        titre: 'Vue d\'ensemble',
        icon: 'bi bi-pie-chart',
        url:''
      },
      {
        id: '02',
        titre: 'Statisques',
        icon: 'fa fa-bar-chart-line-fill',
        url:'statisques'
      }
    ]
      },


      {
        id: '1',
        titre: 'Article',
        icon: 'bi bi-boxes',
        url: '',
        sousMenu: [
          {
            id: '11',
          titre: 'Article',
          icon: 'bi bi-boxes',
          url: 'articles',
          }
          /* {
            id: '12',
            titre: 'Mouvements du stock',
            icon: 'bi bi-stack-overflow',
            url: 'mvtstk',
          } */
        ]

      },




      {
        id: '2',
        titre: 'Clients',
        icon: 'bi bi-people',
        url: '',
        sousMenu: [
          {
            id: '21',
          titre: 'Clients',
          icon: 'bi bi-people',
          url: 'clients',
          },
          {
            id: '22',
            titre: 'Commandes clients',
            icon: 'fa fa-cart4',
            url: 'cmd',
          }
        ]

      },




      {
        id: '3',
        titre: 'Parametrages',
        icon: 'fa fa-cogs',
        url: ' ',
        sousMenu: [
          {
            id: '31',
          titre: 'Categories',
          icon: 'fa fa-tools',
          url: 'categories',
          },
          {
            id: '32',
            titre: 'Utilisateurs',
            icon: 'fa fa-users-cog',
            url: 'user',
          }
        ]
      }

];

private lastSelectMenu: Menu | undefined;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  navigate(menu: Menu): void {
    if(this.lastSelectMenu) {
      this.lastSelectMenu.active = false;
    }
    menu.active = true;
    this.lastSelectMenu = menu;
    this.router.navigate([menu.url]);
  }

}
