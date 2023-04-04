import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from 'src/app/pages/model/article.model';
import { ArticleService } from 'src/app/pages/service/article/article.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  articles!: Article[];

  searchFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }

  ngOnInit(): void {

    this.searchFormGroup = this.fb.group({
      search : this.fb.control(null)
    })
  }

  handleSearchArticles() {
    let search = this.searchFormGroup.value.search;
    this.articleService.searchArticles(search).subscribe({
      next: (data) => {
        this.articles = data;
      }
    })
  }

}
