import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '@components/book/book.component';
import { FetchBooksService } from '@services/fetch-books.service';
import { Observable } from 'rxjs';
import type { Book } from 'app/model/book.interface';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import type { CatalogueState } from 'app/model/catalogue-state.interface';
import { BookListComponentActions } from './state/actions';
import { BookListComponentSelectors } from './state/selectors';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookComponent,
    CommonModule,
    HttpClientModule
  ],
  providers: [FetchBooksService],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  error$: Observable<string | undefined>;

  constructor(private store: Store<CatalogueState>) {
  }

  ngOnInit() {
    this.books$ = this.store.select(BookListComponentSelectors.booksSelector);
    this.error$ = this.store.select(BookListComponentSelectors.errorSelector);
    this.store.dispatch(BookListComponentActions.fetchBooks());
  }
}