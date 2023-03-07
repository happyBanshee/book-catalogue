import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '@components/book/book.component';
import { GetBooksService } from '@services/get-books.service';
import { Observable } from 'rxjs';
import { Book } from 'app/model/book.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    BookComponent,
    CommonModule,
    HttpClientModule
  ],
  providers: [GetBooksService],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(readonly booksService: GetBooksService) { }

  ngOnInit() {
    this.books$ = this.booksService.getBooks$();
  }
}