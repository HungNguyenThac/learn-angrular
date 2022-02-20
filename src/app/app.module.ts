import { PipeComponent } from './learn-pipe/pipe.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorService } from './authors.service';
import { AuthorDetailComponent } from './authors/author-detail.component';
import { AuthorListComponent } from './authors/authors-list.component';
import { CheckedComponent } from './checked/checked.component';
import { CountComponnet } from './count/count.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { FilterUserPipe } from './learn-pipe/filter-userList.pipe';
import { FormartAddressPipe } from './learn-pipe/format-address.pipe';
import { HelloComponent } from './hello/hello.component';
import { ChildComponent } from './home - learn router/child/child.component';
import { HomeComponent } from './home - learn router/home.component';
import { LearnFormComponent } from './learn-form/learn-form.component';
import { RxjsCombination } from './learn-rxjs/rxjs-combination';
import { RxjsFilterComponent } from './learn-rxjs/rxjs-filter.component';
import { RxjsHOOsComponent } from './learn-rxjs/rxjs-HOOs.component';
import { LearnRxjsComponent } from './learn-rxjs/rxjs-operators.component';
import { RxjsSubjectComponent } from './learn-rxjs/rxjs-subject.component';
import { RxjsTransformOperator } from './learn-rxjs/rxjs-transform-operators.component';
import { RxjsHandleError } from './learn-rxjs/rxjs.handle-error.component';
import { NavsComponent } from './navs/navs.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabContentDirective } from './tabs/tab-panel/tab-content.directive';
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
    CountComponnet,
    TabContentDirective,
    FormartAddressPipe,
    FilterUserPipe,
    LearnRxjsComponent,
    RxjsTransformOperator,
    RxjsFilterComponent,
    RxjsCombination,
    RxjsHandleError,
    RxjsHOOsComponent,
    LearnFormComponent,
    CustomValidatorComponent,
    RxjsSubjectComponent,
    HomeComponent,
    ChildComponent,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
