import { Injectable, OnInit } from '@angular/core';
import { Author, authors } from './authors-module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(authors);
  }

  getUser(): Observable<Author[]> {
    return of(authors);
  }
}
