import { Routes } from "@angular/router"
import { HomeComponent } from "./home - learn router/home.component"

export const routes: Routes = [
  // detail sẽ để trước vì angular sẽ chạy từ trên xuống dưới mà math với url trùng
  // nếu có children thì sẽ nhúng router-outlet ở html cha
  {
    path: "",
    component: HomeComponent,
    // children: [{ path: "child", component: ChildComponent }],
  },
  // {
  //   path: 'articles',
  //   loadChildren: () =>
  //     import('././home - learn router/articles/articles.module').then(
  //       (m) => m.ArticlesModule
  //     ),
  // },
]

// routes bằng [routerLink]
// <a [routerLink]="['/detail', article$.slug]"></a>
// router link sẽ là drective là 1 array với các index tương ứng với path url

// routes bằng Router
// constructor(private router: Router) {}
//  switchUrl(slug: any)
//  {this.router.navigate(['/detail', slug]);}

// lazyload module:
// bước 1: ở routes module con, chỉ để lại các routes children con.
// bước 2: bắt buộc trên module phải có RouterModule.forchild()
// bước 3: ở module cha, bỏ module con ra khỏi import module cha
// bước 4: sử dụng cú pháp lazyload module ở routes của routing cha
// {path: 'articles', loadChildren: ()=> import("././home - learn router/child/child.component").then(m => m.childComponent)}
