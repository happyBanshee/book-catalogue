import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBooksService } from './get-books.service';
import { BookComponent } from './book.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  constructor(readonly booksService: GetBooksService) { }
}
