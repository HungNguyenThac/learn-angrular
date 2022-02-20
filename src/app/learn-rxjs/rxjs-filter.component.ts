import { Component } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import {
  auditTime,
  debounceTime,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  find,
  first,
  last,
  single,
  skip,
  skipUntil,
  skipWhile,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-filter',
  template: '',
  styles: [],
})
export class RxjsFilterComponent {
  array = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9];

  observer = {
    next: (val: any) => {
      console.log(val);
    },
    error: (err: any) => {
      console.log('error:' + err);
    },
    complete: () => {
      console.log('Complete');
    },
  };

  // first: frist sẽ emit ra phần tử đầu tiên và complete ngay sau đó.
  // first sẽ trả về emptyError nếu không có phần tử nào được emit ra mà parent observable đã complete( empty observable,...)
  // first có thể nhận vào predicate
  // predicate là điều kiện. nếu không thoả mãn điều kiện mà observable đã complete thì first sẽ throw error.
  // nếu không muốn first throw error thì thêm default value ==> ko trả về throw error
  first = from(this.array)
    .pipe(first((x) => x % 2 === 0))
    .subscribe();

  // last: frist sẽ emit ra phần tử cuối cùng và complete ngay sau đó.
  last = from(this.array)
    .pipe(last((x) => x % 2 === 0))
    .subscribe();

  // find: frist sẽ emit ra phần tử đầu tiên thoả mãn điều kiện và complete ngay sau đó.
  //    find: bắt buộc phải truyền vào 1 predicate, có default Value
  //    find: có nhận vào default value
  //    không throw error nếu không có phần tử thoả mãn predicate hoặc parent observable complete( rỗng)
  find = from(this.array)
    .pipe(find((x) => x % 2 === 0, 0))
    .subscribe();

  // single: single cũng dùng để tìm phần tử thoả, tuy nhiên, single chặt chẽ hơn find.
  // single sẽ không có default value
  // single sẽ throw error nếu như có >= 2 phần tử thoả mãn điều kiện
  // single sẽ emit => undifined nếu không có phần tử nào thoả mãn
  // single chỉ sử dụng nếu như bạn có phần tử nào bắt buộc phải thoả mãn
  single = from(this.array)
    .pipe(single((x) => x % 9 === 0))
    .subscribe();

  single2 = from(this.array)
    .pipe(single((x) => x % 10 === 0))
    .subscribe();

  // take: nhận vào 1 tham số "count" dùng để đặt cho số giá trị được emit từ parent Observable.
  // take: take sẽ complete ngay sau đó.
  // take: trong trường hợp count > số phần tử emit ra, thì take sẽ emit ra toàn bộ số phần tử đó
  // take: sẽ không throw ra bất kỳ error
  // take(1):
  // Báo cáo user click ở đâu khi vào page đầu tiên? ==> khảo sát
  // Snapshot của data tại 1 thời điểm
  // Route Guard mà return Observable.
  take = from(this.array).pipe(take(3)).subscribe();

  //takeLast: takelast tương tự như take, tuy nhiên thì count ở đây sẽ dùng để lấy ra giá trị emit từ cuối lên
  takeLast = from(this.array).pipe(takeLast(3)).subscribe();

  // takeUntil :takeUntil sẽ nhận tham số là một observable như là notifier,
  // và takeUntil sẽ emit giá trị cho đến khi notifier được complete.
  // observable của takeUntil thường được gắn với fromEvent hoặc fromEventPattern
  // ==> takeUntil hoạt động hiệu quả khi bạn có notifier từ bên ngoài (external
  takeUntil = interval(1000)
    .pipe(takeUntil(fromEvent(document, 'click')))
    .subscribe();

  // takeWhile: tương tự như takeUntil, tuy nhiên,
  // takeWhile sẽ nhận vào predicate và dùng chính predicate này để complete
  // takeWhile() hoạt động hiệu quả nhất khi bạn muốn unsusbcribe từ chính giá trị mà Observable emit (internal).
  takeWhile = interval(1000)
    .pipe(takeWhile((x) => x < 6))
    .subscribe();

  // skip: skip hoạt động như take, sẽ nhận vào một count, tuy nhiên skip sẽ dùng count này để bỏ qua số lượng phần tử tương ứng
  skip = from(this.array).pipe(skip(3)).subscribe();

  // skipUntil: hoạt động tương tự như takeUntil, và mang tính chất giống skip
  // skipUntil sẽ chạy ngầm cho đến khi notifier được complete
  skipUntil = interval(1000)
    .pipe(skipUntil(fromEvent(document, 'click')))
    .subscribe();

  // skipWhile: skipWhile nhận vào một predicate và dùng predicate này làm điều kiện phụ thuộc.
  // skipWhile sẽ không chạy cho tới khi predicate false
  skipWhile = interval(1000)
    .pipe(skipWhile((x) => x < 6))
    .subscribe();

  // distinct(): sẽ so sánh các giá trị được emit ra từ parent observable, và chỉ emit các giá trị chưa được emit qua
  // distinct dùng để lọc các giá trị emit trùng lặp
  // distinct có thể nhận keySelector để có thể chọn được property nào cần được so sánh
  distinct = from(this.array).pipe(distinct()).subscribe();
  users = [
    { name: 'hung', age: 25 },
    { name: 'manh', age: 26 },
    { name: 'manh', age: 27 },
    { name: 'manh', age: 28 },
    { name: 'manh', age: 28 },
    { name: 'thuy', age: 25 },
    { name: 'dung', age: 24 },
  ];
  distinct2 = from(this.users)
    .pipe(distinct((x) => x.age))
    .subscribe();

  // distinctUntilChanged: distinctUntilChanged có concept tương tự như distinct
  // nhưng sẽ chỉ so sánh theo cặp với giá trị emit liền kề trước đó
  // distinctUntilChanged có thể nhận keySelector để có thể chọn được property nào cần được so sánh
  distinctUntilChanged = from(this.array)
    .pipe(distinctUntilChanged())
    .subscribe();
  distinctUntilChanged2 = from(this.users)
    .pipe(distinctUntilChanged((a, b) => a.age > b.age))
    .subscribe();

  // distinctUntilKeyChanged: distinctUntilKeyChanged là bản rút gọn của distinctUntilChanged ==> làm việc với object
  distinctUntilKeyChanged = from(this.users)
    .pipe(distinctUntilKeyChanged('age'))
    .subscribe();

  //throtle/ throtleTime
  //throtleTime nhận vào tham số là duration.khi Observable gốc emit giá trị, throtleTime sẽ emit giá trị đó và
  // trigger timer với duration được truyền vào. khi đó, các giá trị emit tiếp theo của observable gốc sẽ được bỏ qua cho đến khi timer kết thúc
  // và throttleTime lại emit giá trị emit mới của parent observable, và lại trigger timer.

  // throttleTime() có thể nhận vào tham số ThrottleConfig: {leading: boolean, trailing: boolean} để xác định xem throttleTime()
  // sẽ emit giá trị đầu hay giá trị cuối khi timer chạy xong. Default là {leading: true, trailing: false}.
  throttleTime = interval(1000).pipe(throttleTime(3000)).subscribe();
  throttleTime2 = fromEvent(document, 'click')
    .pipe(throttleTime(3000))
    .subscribe();
  // throttle: có concept cũng tương tụ như throttleTime, tuy nhiên thì tham số nhận vào throttle là một observable
  //   throttle = interval(1000).pipe(throttle()).subscribe();

  //debounce/debounceTime
  debounceTime = fromEvent(document, 'click')
    .pipe(debounceTime(1000))
    .subscribe();

  //auditTime: auditTime nhận vào tham số như là một timer, khi parent observable emit ra giá trị ==> auditTime trigger timer
  // lúc này, auditTime sẽ bỏ qua toàn bộ những giá trị mà parent observable emit
  // đến khi timer kết thúc, thì auditTime sẽ emit giá trị cuối cùng mà trước đó parent observable đã emit
  auditTime = interval(1000).pipe(auditTime(2000)).subscribe();
}
