import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  //returning observable of type Article
  getArticles(): Observable<Article[]>
  {
    const articles: Article[] = ARTICLES;
    //of is used to return the observable
    return of(articles);
  }

  
  getArticle(key: string): Observable<Article>
  {
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }




}
