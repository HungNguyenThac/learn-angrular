import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorService } from './authors.service';
import { AuthorDetailComponent } from './authors/author-detail.component';
import { AuthorListComponent } from './authors/authors-list.component';
import { CheckedComponent } from './checked/checked.component';
import { CountComponnet } from './count/count.component';
import { FilterUserPipe } from './filter-userList.pipe';
import { FormartAddressPipe } from './format-address.pipe';
import { HelloComponent } from './hello/hello.component';
import { RxjsCombination } from './learn-rxjs/rxjs-combination';
import { RxjsFilterComponent } from './learn-rxjs/rxjs-filter.component';
import { RxjsHOOsComponent } from './learn-rxjs/rxjs-HOOs.component';
import { LearnRxjsComponent } from './learn-rxjs/rxjs-operators.component';
import { RxjsTransformOperator } from './learn-rxjs/rxjs-transform-operators.component';
import { RxjsHandleError } from './learn-rxjs/rxjs.handle-error.component';
import { NavsComponent } from './navs/navs.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabContentDirective } from './tabs/tab-panel/tab-content.directive';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { LearnFormComponent } from './learn-form/learn-form.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { RxjsSubjectComponent } from './learn-rxjs/rxjs-subject.component';

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
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
