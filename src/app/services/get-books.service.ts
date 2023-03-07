import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'app/model/book.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class GetBooksService {
  private url = '../../assets/books.json';
  constructor(private http: HttpClient) { }
  getBooks$(): Observable<Book[]> {
    return this.http.get(this.url).pipe(
      catchError(e => {
        //todo: move it error handlers
        console.error('No books found', e);
        return [];
      })
    );
  }
}
