import { TestBed } from '@angular/core/testing';
import { FetchBooksService } from './fetch-books.service';

describe('BooksService', () => {
  let service: FetchBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
