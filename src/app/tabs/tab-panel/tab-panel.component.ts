import { TabContentDirective } from './tab-content.directive';
import { TabGroupComponent } from './../tab-group/tab-group.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit {
  @Input() title!: string;

  @ViewChild(TemplateRef, { static: true }) inplicitBody!: TemplateRef<unknown>;

  // ContentChild tương tự như ViewChild, viewChild có afterViewInit ==> afterContentInit
  // contentChild xử dụng khi muốn trỏ tới thẻ nội dung được viết ở giữa 2 tag đóng và mở của tag selector
  // ==> tìm hiểu contentChild thông qua xây dựng tính năng lazyload
  // ta bọc nội dung content trong thẻ ng-template => ng-template cho phép cho ta quản lý thời gian
  // và địa điểm và ng-template hiển thị.
  // để có thẻ trỏ tới đúng template chứa nội dung mong muốn, chúng ta tạo 1 directive,
  // directive trỏ tới thẻ ng-template ==> directive sẽ tạo 1 instance và ng-template là một thuộc tính của đối tượng mà directive tạo ra
  // ở ContentChild, chúng ta trỏ gọi tới directive và lấy templateRef bằng read.
  // chúng ta sử dụng get để tạo ra một thuộc tính có kiểu dữ liệu là TemplateRef và return về inplicit || explicit
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef })
  expliciteBody!: TemplateRef<unknown>;

  constructor(
    private tabGroup: TabGroupComponent,
    private HostElement: ElementRef
  ) {}

  get panelBody(): TemplateRef<unknown> {
    return this.expliciteBody || this.inplicitBody;
  }

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }
  ngOnDestroy(): void {
    this.tabGroup.addTab(this);
  }
}
