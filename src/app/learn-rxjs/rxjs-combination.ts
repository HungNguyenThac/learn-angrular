import { Component } from '@angular/core';
import { combineLatest, forkJoin, from, interval, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-combination',
  template: '',
  styles: [],
})
export class RxjsCombination {
  constructor() {}
  observer = {
    next: (val: any) => {
      console.log(val);
    },
    error: (err: any) => {
      console.log(err);
    },
    complete: () => {
      console.log('complete');
    },
  };

  array = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9];

  users = [
    { name: 'hung', age: 25 },
    { name: 'manh', age: 26 },
    { name: 'manh', age: 27 },
    { name: 'manh', age: 28 },
    { name: 'manh', age: 28 },
    { name: 'thuy', age: 25 },
    { name: 'dung', age: 24 },
  ];

  // forkJoin: concept tương tự promise.all(), khi tất cả các observable complete,
  // forkJoin sẽ đưa kết quả của tất cả các observable vào trong array
  // forkJoin nếu một trong các observable không complete thì forkJoin sẽ không bao giờ emit
  // nếu một trong các observable throw error thì forkJoin cũng sẽ throw error

  // ==> forkJoin tạo mảng
  forkJoin = forkJoin([
    of(this.users).pipe(map((data) => data)),
    of(this.array).pipe(map((data) => data)),
  ]).subscribe();

  // ==> forkJoin tạo object
  forkJoin2 = forkJoin({
    users: of(this.users).pipe(map((data) => data)),
    array: of(this.array).pipe(map((data) => data)),
  }).subscribe();

  // combineLates: concept tương tự như forkJoin, nhưng sẽ không chờ tất cả các observable hoàn thành rồi mới emit kết quả
  // combineLates: sẽ emit ra ngay kết quả mà observable

  combineLates = combineLatest([
    from(this.users).pipe(map((data) => data)),
    from(this.array).pipe(map((data) => data)),
  ]).subscribe();

  combineLatest2 = combineLatest([
    interval(1000).pipe(map((x) => `First: ${x}`)), // {1}
    interval(2000).pipe(map((x) => `Second: ${x}`)), // {2}
    interval(3000).pipe(map((x) => `Third: ${x}`)), // {3}
  ]).subscribe();
}
