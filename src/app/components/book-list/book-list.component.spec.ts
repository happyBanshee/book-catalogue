import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BookComponent } from '@components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list.component';
import { BookListComponentSelectors } from '@selectors/index';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

describe('BookListComponent', () => {
  const arrange = () => {
    const bookMock = {
      title: 'mock title',
      author: 'mock author',
      year: '2000'
    };
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule,],
      providers: [
        MockComponent(BookComponent),
        provideMockStore({
        })
      ],
    })
      .compileComponents();

    const fixture = TestBed.createComponent(BookListComponent);
    const component = fixture.componentInstance;
    const store = TestBed.inject(MockStore);

    const bookSelectorMock = store.overrideSelector(BookListComponentSelectors.booksSelector, [bookMock]);
    const errorSelectorMock = store.overrideSelector(BookListComponentSelectors.errorSelector, 'error');
    const successSelectorMock = store.overrideSelector(BookListComponentSelectors.successSelector, 'success');

    fixture.detectChanges();

    return { component, store, fixture, bookSelectorMock, errorSelectorMock, successSelectorMock };
  };


  it('should call store for booksSelector, errorSelector and successSelector ', () => {
    const { store, component, bookSelectorMock, errorSelectorMock, successSelectorMock } = arrange();
    const spy = spyOn(store, 'select');

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(bookSelectorMock);
    expect(spy).toHaveBeenCalledWith(errorSelectorMock);
    expect(spy).toHaveBeenCalledWith(successSelectorMock);
  });

  it('should display the book list', () => {
    const { fixture, component } = arrange();
    component.ngOnInit();
    fixture.detectChanges();
    const bookElements = fixture.nativeElement.querySelectorAll('app-book');
    expect(bookElements.length).toBe(1);
  });
});