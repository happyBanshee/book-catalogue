import { TestBed } from '@angular/core/testing';
import type { Book } from '@models/book.interface';
import { FetchBooksService } from './fetch-books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('FetchBooksService', () => {
  const arrange = () => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchBooksService]
    });
    const service = TestBed.inject(FetchBooksService);
    const httpMock = TestBed.inject(HttpTestingController);
    const mockResponse: Book[] = [
      { title: 'mock title', author: 'mock author 1', year: '2020' },
      { title: 'mock title', author: 'mock author 2 ', year: '1900' },
    ];
    return { service, httpMock, mockResponse };
  };

  it('should fetch books successfully', async () => {
    const { service, mockResponse, httpMock } = arrange();
    const spy = jasmine.createSpy();
    service.fetchBooks$().subscribe(spy);
    const req = httpMock.expectOne('../../assets/books.json');

    req.flush(mockResponse);

    expect(spy).toHaveBeenCalledWith(mockResponse);
  });

  it('should throw an error when fetching books fails', () => {
    const { service, httpMock } = arrange();
    const spy = jasmine.createSpy();
    service.fetchBooks$().subscribe({ error: spy });
    const req = httpMock.expectOne('../../assets/books.json');

    req.error(new ProgressEvent('error'));

    expect(spy).toHaveBeenCalled();
  });
});