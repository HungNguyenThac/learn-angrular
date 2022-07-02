import { Component } from "@angular/core"
import {
  combineLatest,
  concat,
  forkJoin,
  from,
  interval,
  merge,
  of,
  zip,
} from "rxjs"
import { delay, map, take, takeUntil, takeWhile } from "rxjs/operators"

@Component({
  selector: "app-rxjs-combination",
  template: "",
  styles: [],
})
export class RxjsCombination {
  constructor() {}
  observer = {
    next: (val: any) => {
      console.log(val)
    },
    error: (err: any) => {
      console.log(err)
    },
    complete: () => {
      console.log("complete")
    },
  }

  array = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9]

  users = [
    { name: "hung", age: 25 },
    { name: "manh", age: 26 },
    { name: "manh", age: 27 },
    { name: "manh", age: 28 },
    { name: "manh", age: 28 },
    { name: "thuy", age: 25 },
    { name: "dung", age: 24 },
  ]

  // forkJoin: concept tương tự promise.all(), khi tất cả các observable complete,
  // forkJoin sẽ đưa kết quả của tất cả các observable vào trong array
  // forkJoin rất quan trọng thứ tự observable, đây cũng là sự khác biệt chính với merge
  // forkJoin nếu một trong các observable không complete thì forkJoin sẽ không bao giờ emit
  // nếu một trong các observable throw error thì forkJoin cũng sẽ throw error

  // ==> forkJoin tạo array
  apisArray = [
    of(this.users).pipe(
      delay(3000),
      map((data) => data)
    ),
    of(this.users).pipe(
      delay(1000),
      map((data) => data)
    ),
  ]
  forkJoin = forkJoin(this.apisArray)

  // ==> forkJoin tạo object
  apisObj = [
    of(this.users).pipe(map((data) => data)),
    of(this.array).pipe(map((data) => data)),
  ]
  forkJoin2 = forkJoin(this.apisObj).pipe(
    map(([users, array]) => ({ users, array }))
  )

  // combineLates dùng khi có observable có thể sẽ không complete
  // combineLates: concept tương tự như forkJoin, nhưng sẽ không chờ tất cả các observable hoàn thành rồi mới emit kết quả
  // combineLates: sẽ emit ra giá trị mới của stream mới và các giá trị cũ của các stream cũ

  combineLates = combineLatest([
    from(this.users).pipe(map((data) => data)),
    from(this.array).pipe(map((data) => data)),
  ]).subscribe()

  combineLatest2 = combineLatest([
    interval(1000).pipe(map((x) => `First: ${x}`)), // {1}
    interval(2000).pipe(map((x) => `Second: ${x}`)), // {2}
    interval(3000).pipe(map((x) => `Third: ${x}`)), // {3}
  ]).subscribe()

  // zip: sẽ combine theo cặp, nếu có observable emit ra một giá trị lẻ, thì zip sẽ không emit giá trị đó
  // được sử dụng trong trường hợp call API mà API trả về toàn id, toàn name,... và phải ghép lại để có dữ liệu hoàn chỉnh
  zip = zip(of(1, 2, 3), of(4, 5, 6), of(9, 8, 7))
    .pipe(map(([a, b, c]) => ({ a, b, c })))
    .subscribe()
  zip2 = zip(of(1, 2, 3), of(4, 5, 6), of(9, 8, 7))
    .pipe(map(([age, name, isAdmin]) => ({ age, name, isAdmin })))
    .subscribe()

  // concat: con cát sẽ sẽ subscribe lần lượt vào child observable được truyền theo thứ tự
  // khi observable đầu tiên complete thì concat mới subscribe vào observable thứ 2
  // Nếu {1} emit và complete, concat() sẽ emit giá trị mà {1} emit rồi sẽ subscribe vào Observable kế tiếp.
  // Nếu {1} error, concat() sẽ error ngay lặp tức và chuỗi Observable phía sau sẽ bị bỏ qua.
  // Nếu {1} complete mà không emit, concat() sẽ bỏ qua và subscribe vào Observable kế tiếp
  // Nết {1} emit và không complete, concat() sẽ emit giá trị mà {1} emit NHƯNG sẽ không subscribe vào Observable kế tiếp vì {1} không complete.
  // concat quan trọng thứ tự và sẽ subscribe theo thứ tự
  concat = concat(
    interval(1000).pipe(take(6)),
    of(["asdfasdfasdf"])
  ).subscribe()

  // merge: merge sẽ subscribe vào tất cả các observable và sẽ emit nếu 1 trong các child observable emit
  // merge không quan trọng thứ tự và sẽ emit giá trị mà observable nào emit trước
  // merge sẽ throw error nếu 1 trong child observable throw error
  // merge chỉ complete nếu tất cả các child observable complete
  merge = merge(
    of([1, 2, 3, 4, 5]).pipe(delay(1000)),
    of(["WERQWERQWE"])
  ).subscribe()
}
