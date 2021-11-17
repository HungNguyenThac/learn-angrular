import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { of, from, merge, fromEvent, interval } from 'rxjs';
import {
  map,
  delay,
  pluck,
  mapTo,
  reduce,
  scan,
  toArray,
  buffer,
  bufferTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-transform-operator',
  template: `<button>Click</button>`,

  styles: [],
})
export class RxjsTransformOperator {
  // pipe có thể hợp combineLatest([someObs, someObs])
  users = [
    {
      id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
      username: 'tiepphan',
      firstname: 'tiep',
      lastname: 'phan',
      fullname: 'tiep phan',
      age: 20,
    },
    {
      id: '34784716-019b-4868-86cd-02287e49c2d3',
      username: 'nartc',
      firstname: 'chau',
      lastname: 'tran',
      fullname: 'chau tran',
      age: 40,
    },
  ];

  user2 = [
    {
      id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
      username: 'thachung',
      firstname: 'hung',
      lastname: 'thac',
      fullname: 'thac hung',
      age: 20,
    },
    {
      id: '34784716-019b-4868-86cd-02287e49c2d3',
      username: 'thacthinh',
      firstname: 'thinh',
      lastname: 'thac',
      fullname: 'thac thinh',
      age: 40,
    },
  ];

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

  // map: map sẽ nhận về giá trị từ observable cha hoặc từ các operators trước đó
  map = from(this.users)
    .pipe(
      map((user) => {
        return {
          ...user,
          fullname: `${user.firstname} ${user.lastname}`,
        };
      })
    )
    .subscribe();

  params = { id: 123 };
  map2 = of(this.params)
    .pipe(map((data) => data.id))
    .subscribe();

  //pluck sử dụng nhiều để lấy id trong object params từ URl
  //pluck có thể nested pluck vào sâu bên trong observable
  pluck = of({ id: 123, foo: { bar: 'nested pluck' } });
  pluck1 = this.pluck.pipe(pluck('id')).subscribe();
  pluck2 = this.pluck.pipe(pluck('foo', 'bar')).subscribe();

  // mapTo ==> chuyển từ 1 observable sang 1 giá trị cố định nào đó
  // thường sử dụng trong Dom event,
  // với logic rằng: khi ta làm cái này thì ta muốn có cái này
  mapTo = merge(
    fromEvent(document, 'mouseenter').pipe(mapTo(true)),
    fromEvent(document, 'mouseleave').pipe(mapTo(false))
  ).subscribe();

  //reduce với logic như reduce trên javscript.
  // reduce chỉ chạy khi toàn bộ observable được emit.
  reduce$ = merge(
    of(this.users[0]).pipe(delay(1000)),
    of(this.users[1]).pipe(delay(2000))
  )
    .pipe(scan((cal, cur) => cal + cur.age, 0))
    .subscribe();

  reduce2$ = merge(of(this.users), of(this.user2))
    .pipe(reduce((arr, cur) => [...arr, ...cur]))
    .subscribe();

  // toArray ==> gom tất cả các giá trị đã
  // được emit ở parent observable vào trong 1 array
  toArray$ = merge(from(this.users), from(this.user2))
    .pipe(toArray())
    .subscribe();

  //buffer theo hành vi
  // lưu trữ giá trị được emit ra cho đến khi thực thi buffer
  @ViewChild('btn', { read: ElementRef }) btnClick!: HTMLButtonElement;
  ngAfterViewInit(): void {}
  click$ = fromEvent(document, 'click');
  source$ = interval(1000).pipe(buffer(this.click$)).subscribe();

  //buffer time
  click2$ = fromEvent(document, 'click');
  source2$ = interval(1000).pipe(bufferTime(2000)).subscribe();
}
