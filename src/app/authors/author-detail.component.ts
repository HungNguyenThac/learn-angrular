import { Author, authors } from './../authors-module';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent {
  counter = 1;
  //data binding từ component cha vào component con
  @Input() userList: any;
  @Input() currentUser: any;
  @Input() linkTemplate!: TemplateRef<any>;

  constructor() {}
  // gán một instance vào tham số trong một tham số của một biến và truyền ngược lên component cha
  @Output() select = new EventEmitter<Author>();
  @Output() remove = new EventEmitter<Author>();
  increment() {
    this.counter = this.counter + 1;
  }
}
