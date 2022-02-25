import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from './models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  get article$(): Observable<Article[]> {
    return of<Article[]>([
      {
        title: 'Titile 1',
        body: 'hello anh em',
        slug: 'title1',
      },
      {
        title: 'Titile 2',
        body: 'hello anh em',
        slug: 'title2',
      },
      {
        title: 'Titile 3',
        body: 'hello anh em',
        slug: 'title3',
      },
    ]);
  }

  getArticle(slug: string): Observable<Article | undefined> {
    return this.article$.pipe(
      map((articles) => articles.find((ar) => ar.slug === slug))
    );
  }
}
