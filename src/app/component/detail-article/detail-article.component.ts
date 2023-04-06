import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/pages/model/article.model';
import { ArticleService } from 'src/app/pages/service/article/article.service';
import { AuthentificationService } from 'src/app/pages/service/authentification.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})


export class DetailArticleComponent implements OnInit {

  articles!: Array<Article>;
  errorMessage!: string;
  // searchFormGroup!: FormGroup;

  constructor(
    public authService: AuthentificationService,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.handleGetAllArticles();
  }

  handleGetAllArticles() {

    this.articleService.getAllArticles().subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handleDeleteArticle(article: Article) {
    let conf=confirm("Are you sure?")
    if (conf==false) return;
     this.articleService.deleteArticle(article.code).subscribe({
      next: (data) => {
        // this.handleGetAllArticles();
        let index = this.articles.indexOf(article);
        this.articles.splice(index, 1);
      }
     })
  }

  handleEditArticle(article: Article) {
    this.router.navigateByUrl("/dashboard/editarticle/"+ article.code);
  }

  // handleSearchArticles() {
  //   let search = this.searchFormGroup.value.search;
  //   this.articleService.searchArticles(search).subscribe({
  //     next: (data) => {
  //       this.articles = data;
  //     }
  //   })
  // }




}
