import { Injectable } from '@angular/core';
import { Book } from './model/book.interface';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {
  getBooks(): Book[] {
    return [{
      title: "book 1",
      author: 'author 1',
      publicationDate: new Date()
    },
    {
      title: "book 2",
      author: 'author 2',
      publicationDate: new Date()
    }];
  }
}
