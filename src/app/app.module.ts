import { RxjsFilterComponent } from './learn-rxjs/rxjs-filter.component';
import { RxjsTransformOperator } from './learn-rxjs/rxjs-transform-operators.component';
import { FilterUserPipe } from './filter-userList.pipe';
import { FormartAddressPipe } from './format-address.pipe';
import { TabContentDirective } from './tabs/tab-panel/tab-content.directive';
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
import { CountComponnet } from './count/count.component';
import { LearnRxjsComponent } from './learn-rxjs/rxjs-operators.component';

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
    CountComponnet,
    TabContentDirective,
    FormartAddressPipe,
    FilterUserPipe,
    LearnRxjsComponent,
    RxjsTransformOperator,
    RxjsFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
