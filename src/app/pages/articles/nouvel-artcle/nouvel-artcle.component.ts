import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../service/article/article.service';

@Component({
  selector: 'app-nouvel-artcle',
  templateUrl: './nouvel-artcle.component.html',
  styleUrls: ['./nouvel-artcle.component.scss']
})
export class NouvelArtcleComponent implements OnInit {

  articleFormGroup!: FormGroup;

  constructor(
    private router: Router, private fb: FormBuilder, private articleService: ArticleService
  ) { }

  ngOnInit(): void {

    this.articleFormGroup = this.fb.group({
      // code : this.fb.control(null, Validators.required),
      designation : this.fb.control(null, Validators.required),
      categorie : this.fb.control(null, Validators.required),
      prix : this.fb.control(null, Validators.required),
    });
  }


  cancelClick(): void {
    this.router.navigate(['dashboard/articles']);
  }

  handleAddArticle() {
    let article = this.articleFormGroup.value;
    this.articleService.addNewArticle(article).subscribe({
      next: (data) => {
        alert("Article added successfully");
        this.articleFormGroup.reset();
      }, error: err => {
        console.log(err);
      }
    })
  }

}
