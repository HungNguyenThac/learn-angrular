import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CheckedComponent } from './checked/checked.component';
import { userLike } from './learn-pipe/filter-userList.pipe';
import { AddressLike } from './learn-pipe/format-address.pipe';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learnAngular';
  currentIndex: number = 0;
  currentColor = 'black';
  navs = ['native', 'link 1', 'link2'];
  currentProgress = 20;
  isChecked = false;

  //tham chiếu đến component con trên thẻ html
  // từ khoá static giúp chúng ta có sử dụng thẻ được gọi trong OnInit
  // để có thể sử dụng static, thì thẻ trỏ tới không được nằm trong *ngIf, *ngFor,...
  @ViewChild(CheckedComponent, { static: true })
  checkedComponent!: CheckedComponent;

  //trong trường hợp muốn trỏ tới 1 htmlElement thì khai báo #..... tên instance trên htmlelement đó
  // khai báo kiểu dữ liệu là ElementRef và truyền generic với HTMLElement tương ứng
  // sau khi trỏ tới, chúng ta có thể gọi tới thuộc tính nativeElement và trỏ tới các thuộc tính của HTML element
  // trong option, cùng với static chúng ta có read. bằng cách khai báo read, ViewChild sẽ trả về cho mình
  // giá trị khác nhau. trong trường hợp không khai báo ==> default : ElementRef. ngoài ElementRef, chúng ta có viewContainerRef
  // tuỳ giá trị khai báo trong read, mà chúng ta có thể lấy ra thông tin tương ứng
  // ==> this.btnElement.nativeElement.classList.add("checked") <==
  @ViewChild('btnElment', { static: true })
  btnElement!: ElementRef<HTMLButtonElement>;

  // đối với ViewChildren, chúng ta có thể gọi tới nhiều element.
  // trong ViewChildren sẽ không có option static.
  // viewChidren sẽ là một list các item => QueryList<"component">
  // nếu đặt một item của chilren vào tructure directive sẽ báo lỗi
  // ViewChildren cung cấp cho chúng ta changes.subscrible()

  // ==> console.log(this.checkedComponent.changes.subscribe()) <==
  @ViewChildren(HelloComponent) helloComponent!: QueryList<HelloComponent>;

  //khởi tạo
  ngOnInit(): void {}

  //gọi hàm khi có thay đổi
  ngOnChanges(): void {}

  //ngAfterViewInit: thực thi hàm sau khi khởi tạo view, để truy cập tới viewChild và viewChildren
  ngAfterViewInit(): void {
    this.helloComponent.changes.subscribe(console.log);
  }

  address: AddressLike = {
    address1: 'Đình Xuyên',
    address2: 'Gia Lâm',
    address3: 'Hà Nội',
    country: 'Việt Nam',
  };

  userList: userLike[] = [
    { name: 'Hung', age: 18 },
    { name: 'Dung', age: 20 },
    { name: 'Manh', age: 17 },
  ];

  addUser() {
    this.userList = [...this.userList, { name: 'Toan', age: 90 }];
  }
}
// data down: parent component tương tác với component child
//data up: child tương tác với component parent
