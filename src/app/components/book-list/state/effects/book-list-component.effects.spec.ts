import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { FetchBooksService } from '@services/fetch-books.service';
import { BookListComponentActions, } from '../actions';
import { BookListComponentEffects } from './book-list-component.effects';
import type { Book } from '@models/book.interface';
import { BookListComponentEffectsActionTypes } from '../actions/book-list-component-effects.actions';

describe('BookListComponentEffects', () => {
    let actions$ = new Observable<Action>();

    const arrange = () => {

        const book: Book = { author: 'author mock', title: 'title mock', year: '1260' };
        const bookList: Book[] = [book];
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
            ],
            providers: [
                BookListComponentEffects,
                provideMockActions(() => actions$),
                {
                    provide: FetchBooksService,
                    useValue: { fetchBooks$: () => { return of(bookList); } },
                },
            ],
        });
        const effects = TestBed.inject<BookListComponentEffects>(BookListComponentEffects);
        const service = TestBed.inject(FetchBooksService);
        return { effects, service, bookList, book };
    };

    it('should fetch books and dispatch success action', () => {
        actions$ = of(BookListComponentActions.fetchBooks());
        const { bookList, effects } = arrange();

        const expectedActions = { type: BookListComponentEffectsActionTypes.FetchBooksSuccess, bookList };

        const spy = jasmine.createSpy('spy');

        effects.fetchBooks$.subscribe(spy);
        expect(spy).toHaveBeenCalledWith(expectedActions);
    });


    it('should call fetchBooksSuccess and dispatch populate book  action', () => {
        const bookList: Book[] = [{ author: 'author mock', title: 'title mock', year: '1260' }];
        actions$ = of({ type: BookListComponentEffectsActionTypes.FetchBooksSuccess, bookList });
        const { effects } = arrange();

        const expectedActions = { type: BookListComponentEffectsActionTypes.PopulateBookList, bookList };

        const spy = jasmine.createSpy('spy');

        effects.fetchBooksSuccess$.subscribe(spy);
        expect(spy).toHaveBeenCalledWith(expectedActions);
    });

    it('should fetch books and dispatch fail action on error', () => {
        actions$ = of(BookListComponentActions.fetchBooks());
        const { effects, service } = arrange();
        const error = new Error('Failed to fetch books');
        spyOn(service, 'fetchBooks$').and.throwError(error);

        const spy = jasmine.createSpy('spy');

        effects.fetchBooks$.subscribe({ error: spy });

        expect(spy).toHaveBeenCalledWith(error);
    });
});