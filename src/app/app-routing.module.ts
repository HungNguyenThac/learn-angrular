import { ChildComponent } from './home - learn router/child/child.component';
import { HomeComponent } from './home - learn router/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // detail sẽ để trước vì angular sẽ chạy từ trên xuống dưới mà math với url trùng
  // nếu có children thì sẽ nhúng router-outlet ở html cha
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'child', component: ChildComponent }],
  },
  {
    path: 'detail/:slug',
    component: ChildComponent,
  },
];
