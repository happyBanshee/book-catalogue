import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Book } from 'app/model/book.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FetchBooksService {
  private url = '../../assets/books.json';
  constructor(private http: HttpClient) { }

  fetchBooks$(): Observable<Book[]> {
    return this.http.get(this.url).pipe(
      catchError<Book[], never>(() => {
        throw 'An error happened while fetching the book list.';
      }));
  }
}
