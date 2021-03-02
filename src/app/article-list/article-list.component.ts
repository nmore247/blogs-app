import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-articles';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleSvc: ArticleService,
    private titleService: Title,
    private sharedService: SharedService) { }

  articles: Article[] = [];

  ngOnInit() {
    this.titleService.setTitle(
      `${this.sharedService.blogTitle}`
    )
    this.getArticles();
  }

  // getArticles() {
  //   this.articleSvc
  //   .getArticles()
  //   .subscribe(articles => {this.articles = articles})
  // }


  getArticles() {
    this.articleSvc
      .getArticles()
      .subscribe(data => { this.articles = data })
  }

}
