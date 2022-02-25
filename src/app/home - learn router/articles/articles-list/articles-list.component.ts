import { routes } from './../../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticlesService } from './../../aritle.service';
import { Article } from './../../models/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  artitle$!: Observable<Article[]>;

  constructor(
    private readonly articleService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.artitle$ = this.articleService.article$;
  }

  backToArticlesList(slug: any) {
    this.router.navigate(['/articles', slug]);
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
