import { NavsComponent } from './navs/navs.component';
import { CheckedComponent } from './checked/checked.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorDetailComponent } from './authors/author-detail.component';
import { AuthorListComponent } from './authors/authors-list.component';
import { HelloComponent } from './hello/hello.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    CheckedComponent,
    NavsComponent,
    TabGroupComponent,
    TabPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
