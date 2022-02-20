import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from './models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artitle$!: Observable<Article[]>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.artitle$ = of<Article[]>([
      {
        title: 'Titile 1',
        body: 'hello anh em',
        slug: 'title-1',
      },
      {
        title: 'Titile 2',
        body: 'hello anh em',
        slug: 'title-2',
      },
      {
        title: 'Titile 3',
        body: 'hello anh em',
        slug: 'title-3',
      },
    ]);
  }
  switchUrl(slug: any) {
    this.router.navigate(['/detail', slug]);
  }
}
