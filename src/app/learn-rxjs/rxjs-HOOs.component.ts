import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, switchMap, tap } from 'rxjs/operators';
import { Author } from '../authors-module';
import { FilterUserService } from './service/filter-user.service';

@Component({
  selector: 'app-rxjs-HOOs',
  template: '',
  styles: [],
})
export class RxjsHOOsComponent implements OnInit {
  constructor(public userFilter: FilterUserService) {}
  searchInput = new FormControl();
  loading: boolean = false;

  defaultValue: string = '';
  authors!: Author[];

  name: string = '';

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(200),
        tap(() => {
          this.loading = true;
        }),
        startWith(''),
        switchMap((query) =>
          this.userFilter.filterUser(query).pipe(
            tap(() => {
              this.loading = false;
            })
          )
        )
      )
      .subscribe((authors) => {
        this.authors = authors;
      });
  }

  ngAfterViewInit(): void {}

  // mergeAll
  // có bao nhiều observable sẽ subscibe vào bấy nhiêu observeble.
  // mergeAll nhận vào 1 tham số concurrent là số observable sẽ chạy song song.
  // khi dùng concurrent và lẻ ra observable thì observable này sẽ chạy sau

  // concatAll: concatAll behavỉor tương tự như mergeAll với concurrent là số 1.
  // concatAll sẽ subscribe vào từng observable, và bảo đảm là observable này phải complete
  // thì concatAll mới subscribe vào observable tiếp theo

  // switchAll: swichAll sẽ subscribe vào 1 observable và emit nó. trong quá trình emit mà có một observable mới được tạo ra,
  // thì switchAll sẽ cancel emit giá trị của observable hiện tại và sẽ subscribe vào observable mới
  // switchAll không cancel được promise ==> ko dùng. nhưng switchMap thì cancel được

  // ==> MAP
  // switchMap() =>> sử dụng nhiều nhất trong call API với một ứng dụng angular
  // switchMap() =>> chỉ nên dùng trong get data từ database, còn post, put, get, delete thì ko nên dùng

  //uitlity operators
  // tap =>> tap không thay đổi stream, tap không return. tap dùng để debug hoặc thực thi hành động nào đó

  // delay =>> delay stream theo thời gian. tham số truyền vào là milisecond

  // delayWhen =>> concept như delay nhưng nhận vào một function, function trả về một observable.
  // ==> và lúc này, delayWhen sẽ delay cho đến khi observable này emit

  // finalize nhận vào một function, finalize sẽ chạy nếu như observable error hoặc complete

  // repeat sẽ nhận vào một count và count này là giá trị mà observable sẽ rerun
  // =>> retry sẽ chạy khi mà observable trả về một error

  // timeout sẽ nhận vào tham số là milisecond, và timeout sẽ throwError nếu như sau khoảng thời gian này mà chưa có
  // ==> giá trị nào được emit từ parent observable

  //timeoutWith: giống như timeout nhưng nhận vào tham số thứ 2 là một observable. sau khoảng thời gian timeout
  // ==> timeoutWith sẽ không throwError như timeout mà sẽ subscribe vào observable được truyền vào tham số thứ 2
}
