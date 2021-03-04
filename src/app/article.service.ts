import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  //returning observable of type Article
  getArticles(): Observable<Article[]> {
    // const articles: Article[] = ARTICLES;
    // //of is used to return the observable
    // return of(articles);
    return this.http.get<Article[]>('http://localhost:8000/articles');
  }

  getArticle(key: string): Observable<Article> {
    return this.http.get<Article>('http://localhost:8000/articles/' + key);
  }
}
