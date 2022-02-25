import { Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './child/articlesDetail.component';
export const articlesRoutes: Routes = [
  {},
  {
    path: '',
    component: ArticlesListComponent,
  },
  {
    path: ':slug',
    component: ArticleDetailComponent,
  },
];
