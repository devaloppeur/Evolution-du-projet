import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Article } from '../../model/article.model';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Commande } from '../../model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  addNewClient(client: any) {
    throw new Error('Method not implemented.');
  }

  private articles!: Array<Article>;

  constructor(private http: HttpClient) {

    // this.articles = [
    //   {
    //     code : UUID.UUID(), designation : "Salade", categorie : "dessert", prix : 12000
    //   },
    //   {
    //     code : UUID.UUID(), designation : "Djino", categorie : "Boisson", prix : 2000
    //   },
    //   {
    //     code : UUID.UUID(), designation : "Ndolaet", categorie : "plat", prix : 2500
    //   },
    // ];

   }

   public getAllArticles(): Observable<Article[]>{
    let host = environment.host;
    let listArticle;
    listArticle = this.http.get<Article[]>(host+"/articles");
    return listArticle;
   }
  //  public getAllProducts(): Observable<Article[]>{
  //  return of(this.articles);
  //  }

   public deleteArticle(code:string): Observable<boolean> {
    this.articles = this.articles.filter(article => article.code != code);
    return of(true);
   }

   public searchArticles(search: string): Observable<Article[]> {
    this.articles.filter(article => article.designation.includes(search));
    return of(this.articles);
   }

   public addNewArticle(article: Article): Observable<Article> {
    article.code =UUID.UUID();
    this.articles.push(article);
    return of(article);
   }

   getArticle(code: string): Observable<Article> {
    let article = this.articles.find(article => article.code === code);
    if (article === undefined) {
      return throwError(() => Error("Article not found"));
    }
    return of(article);
   }

   public updateArticle(article: Article): Observable<Article> {
    this.articles = this.articles.map(a => (a.code===article.code)?article:a);
    return of(article);
   }







}
