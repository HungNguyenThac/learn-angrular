import { Component, OnInit } from "@angular/core"
import {
  defer,
  from,
  fromEvent,
  fromEventPattern,
  interval,
  Observable,
  of,
  throwError,
  timer,
} from "rxjs"

@Component({
  selector: "app-learn-rxjs",
  template: ``,
  styleUrls: [],
})
export class LearnRxjsComponent implements OnInit {
  constructor() {}

  observer1 = {
    next: (val: any) => {
      console.log(val)
    },
  }

  // of
  // of sẽ emit tất cả những giá trị được chuyền vào và complete
  // of sẽ emit lần lượt ==> stream
  hello = of(Promise.resolve()).subscribe()

  //from
  // tương tự như of nhưng from chỉ nhận vào Observable, array, iterable, Promise
  // from trả về kết quả của promise, và đây là các chính thống để chuyển 1 Promise thành observable
  // from sẽ duyệt mảng về trả về từng phần tử của mảng, tương tự với string
  from1 = from(Promise.resolve("hello")).subscribe()
  from2 = from([1, 2, 3, 4, 5, 6, 7]).subscribe()
  from3 = from("Hello RxJS").subscribe()

  // fromEvent: fromEvent sẽ không tự complete
  fromEvent = fromEvent(document, "click").subscribe()

  // fromEventPattern: ==> nâng cao của fromEvent
  // thường sử dụng để chuyển đổi websocket hoặc signalOr (realTime) từ promise => observable
  fromEventPattern = fromEventPattern(
    //  addHandler
    (handler) => {
      document.addEventListener("click", handler)
    },
    // removeHandler
    (handler) => {
      document.removeEventListener("click", handler)
    }
  )

  // interval ==> tạo ra interval ! interval không delay
  // không tự unsubscribe nên phải handle bằng tay
  interval = interval(1000).subscribe()

  //timer
  // setTimeout:  setTimeout sẽ tự clearTimeout
  timer1 = timer(1000).subscribe()
  //setTimeout sử dụng như một interval nhưng setTimeout sẽ delay
  timer2 = timer(1000, 1000).subscribe()

  // throwError
  throwError = throwError("error").subscribe()

  // apiCall.pipe(
  //   catchError((err) => {
  //     sentry.logError(err);
  //     const exception = createException(err);
  //     return throwError(err);
  //   })
  // );

  //defer
  // cách dùng 1
  random = of(Math.random())
  random1 = this.random.subscribe()
  random2 = this.random.subscribe()
  random3 = this.random.subscribe()
  random4 = this.random.subscribe()
  // ==> Math.random chỉ chạy 1 lần, nên cả 4 lần subscribe đều subscribe trên 1 giá trị ==> tạo ra 4 observable giống nhau

  now$ = defer(() => of(Math.random()))
  // defer ko chạy emit ra kêt quả luôn mà đứng chờ đến khi được subscribe vào 1 cái observer nào thì mới chạy
  defer = this.now$.subscribe()
  defer2 = this.now$.subscribe()
  defer3 = this.now$.subscribe()
  // ==> Math.random chỉ chạy 4 lần, nên cả 4 lần subscribe đều subscribe 4 giá trị khác nhau ==> tạo ra 4 observable khác nhau

  // cách dùng 2:
  // Khi defer chạy, thì các observable đã được result rồi, vì vậy sẽ ko báo lỗi.
  // còn nếu dùng of() thì có thể, các observable chưa result
  // Sử dụng defer để return về 1 observable theo điều kiện
  // Example: defer(()=>{
  //    return hasId ? observable1 : observable2
  //      })

  ngOnInit(): void {}

  observable = new Observable(function subscribe(observe) {
    const timeout = setTimeout(() => {
      observe.next("hello")
      observe.complete()
    }, 500)

    return function unsubscribe() {
      clearTimeout(timeout)
    }
  })
}
