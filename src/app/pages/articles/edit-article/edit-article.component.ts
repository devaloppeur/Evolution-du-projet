import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../service/article/article.service';
import { Article } from '../../model/article.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleId!: string;
  article!: Article;
  articleFormGroup!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    public articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.articleId = this.route.snapshot.params['code'];
   }

  ngOnInit(): void {
    this.articleService.getArticle(this.articleId).subscribe({
      next: (article) => {
        this.article = article;
        this.articleFormGroup = this.fb.group({
          // code : this.fb.control(null, Validators.required),
          designation : this.fb.control(this.article.designation, Validators.required),
          categorie : this.fb.control(this.article.categorie, Validators.required),
          prix : this.fb.control(this.article.prix, Validators.required),
        });
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  cancelClick(): void {
    this.router.navigate(['dashboard/articles']);
  }

  handleUpdateArticle() {
    let a = this.articleFormGroup.value;
    a.code = this.article.code;
    this.articleService.updateArticle(a).subscribe({
      next: (article) => {
        alert("Article update successfully");
        this.articleFormGroup.reset();
      }, error: (err) => {
        console.log(err);
      }
    })
  }

}
