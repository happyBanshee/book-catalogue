import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '@components/book/book.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import type { Book } from '@models/book.interface';
import type { CatalogueState } from '@models/catalogue-state.interface';
import { BookListComponentSelectors } from '@selectors/index';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  error$: Observable<string>;
  success$: Observable<string>;

  constructor(private store: Store<CatalogueState>) {
  }

  ngOnInit() {
    this.books$ = this.store.select(BookListComponentSelectors.booksSelector);
    this.error$ = this.store.select(BookListComponentSelectors.errorSelector);
    this.success$ = this.store.select(BookListComponentSelectors.successSelector);

  }
}