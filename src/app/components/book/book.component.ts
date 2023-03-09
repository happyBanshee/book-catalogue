import { Component, Input } from '@angular/core';
import type { Book } from '@models/book.interface';

@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
}
