import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Author, authors } from 'src/app/authors-module';

@Injectable({
  providedIn: 'root',
})
export class FilterUserService {
  constructor() {}
  filterUser(query?: any): Observable<Author[]> {
    return of(authors).pipe(
      map((authors) =>
        authors.filter((author) => {
          if (!author) return true;
          return (
            author.name.toLowerCase().includes(query.toLowerCase()) ||
            author.username.toLowerCase().includes(query.toLowerCase()) ||
            author.email.toLowerCase().includes(query.toLowerCase())
          );
        })
      )
    );
  }
}
