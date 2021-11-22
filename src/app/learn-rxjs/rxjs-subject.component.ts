import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './learnRxJS.component.html',
  styles: [],
})
export class RxjsSubjectComponent implements OnInit {
  // Vấn để: mỗi lần subscribe vào một observable thì sẽ tạo ra một luồng dữ liệu riêng
  // ==> nếu nhiều observer subscribe vào một observable thì sẽ tạo ra các luồng khác nhau
  // bài toán: là có cách nào để các observer khi subcribe vào một observable thì sẽ nhận được giá trị emit giống nhau?
  // ==> subject ra đời.
  // subject là một class đặc biệt. khi parent observable subsribe vào một subject, thì subject sẽ lưu observable đó.
  // và khi parent observable emit giá trị, thì subject sẽ next() ra giá trị cho tất cả các observable ==> share được
  // subject vừa có thể cho observable subcribe và vừa có thể next() dữ liệu được
  // subject nên khai báo trong "private readonly" ==> private readonly $subject ==> export this.$subject.asObservable()
  // có 3 loại subject: subject, behaviorSubject, replaySubject

  // 1: subject : subject.next() sẽ bắn giá trị, và tuỳ theo vị trí mà observer subcribe trước hay sau lúc subject.next() mà sẽ nhận được giá trị tương ứng
  // ==> subcrible trước, sẽ nhận được giá trị subject.next() phía sau. và subscribe sau thì sẽ không nhân được giá trị subject.next() trước đó

  // 2: behaviorSubject: sẽ nhận vào một giá trị khởi tạo
  // khi observer đầu tiên subscribe ==> sẽ emit ra giá trị ban đầu
  // khi behaviorSubject.next() thì behaviorSubject sẽ lưu giá trị next() vào làm giá trị tạm thời
  // và mỗi lần next() sẽ thay thế giá trị tạm thời bằng giá trị mới => lưu giá trị cuối cùng next()
  // ==> tất cả các observer subcribe sẽ đều nhận được giá trị cuối cùng

  //replaySubject: nhận vào một count là số giá trị mà replaySubject sẽ lưu từ cuối cùng trở lên ==> truyền 2 thì sẽ lưu giữ 2 giá trị cuối cùng
  //
  createObserver = (observer: any) => ({
    next: (val: any) => {
      console.log(observer, val);
    },
    error: (err: any) => {
      console.log(observer, err);
    },
    complete: () => {
      console.log(observer, 'complete');
    },
  });

  subject = new Subject();
  searchTerm$ = new Subject<string>();

  ngOnInit(): void {
    this.subject.subscribe(this.createObserver('A'));
    this.subject.next('hello');
    this.subject.next('world');
    this.subject.subscribe(this.createObserver('B'));

    this.subject.next('B -1');

    this.searchTerm$
      .asObservable()
      .pipe(
        throttleTime(250, undefined, {
          leading: true,
          trailing: true,
        }),
        distinctUntilChanged()
      )
      .subscribe({
        next: (value) => console.log(value),
      });
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm$.next(target.value);
  }
}
