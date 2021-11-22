import { Component } from '@angular/core';
import { forkJoin, from, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-handle-error',
  template: '',
  styles: [],
})
export class RxjsHandleError {
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

  cached = [5];

  catchError = from([1, 2, 3, 4, 5])
    .pipe(
      map((n) => {
        if (this.cached.includes(n)) {
          throw new Error('Duplicated: ' + n);
        }
        return n;
      }),
      catchError((err) => of(err))
    )
    .subscribe();

  catchError2 = forkJoin([
    of([1, 2]),
    of('123123123'),
    throwError(new Error('401')).pipe(
      catchError((err, caught) => of(err)),
      retry(3)
    ),
  ]).subscribe();
}
