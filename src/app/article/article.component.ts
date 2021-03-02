import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private articleSvc: ArticleService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) {}

  article: Article = new Article();
  baseUrl = "http://localhost:4200/";
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      //this.article = new Article();
      const key = params.key;
      this.articleSvc.getArticle(key).subscribe((data) => {
        if (data === undefined) {
          this.router.navigateByUrl('404');
          return;
        }
        this.article = data;
        this.titleService.setTitle(
          `${this.article.title} - ${this.sharedService.blogTitle}`
        );
      });
      this.meta.addTags([
        {
          name: 'description',
          content: this.article.description,
        },
        {
          property: 'og:title',
          content: `${this.article.title} - ${this.sharedService.blogTitle}`,
        },
        {
          property: 'og:url',
          content: this.sharedService.baseUrl + this.article.key,
        },
      ]);
    });
  }
}
