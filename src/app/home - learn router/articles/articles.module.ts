import { ArticleDetailComponent } from './child/articlesDetail.component';
import { articlesRoutes } from './articles.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@NgModule({
  declarations: [ArticlesListComponent, ArticleDetailComponent],
  imports: [CommonModule, RouterModule.forChild(articlesRoutes)],
})
export class ArticlesModule {}
