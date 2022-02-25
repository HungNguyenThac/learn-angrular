import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, pluck, switchMap } from 'rxjs/operators';
import { Article } from '../../models/article';
import { ArticlesService } from './../../aritle.service';

@Component({
  selector: 'app-child',
  templateUrl: './articlesDetail.component.html',
  styleUrls: ['./articlesDetail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article!: Article | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly ArticleService: ArticlesService
  ) {}
  ngOnInit(): void {
    // params trả về 1 observerble, trả vè 1 object có key là slug< set ở routes> có value là param.
    // sau khi lấy được params => call API thông qua services
    // dùng pluck để lấy value với key tương ứng

    this.route.params
      .pipe(
        pluck('slug'),
        switchMap((slug) => this.ArticleService.getArticle(slug)),
        filter((article) => !!article)
      )
      .subscribe((rs) => (this.article = rs));

    console.log(this.article);
  }
}
