import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  constructor(
    private router: Router, public authService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  nouvelArticle(): void {
    this.router.navigate(['dashboard/nouvelarticle']);
  }

}
