import { AddBookComponentActions, AddBookComponentEffectsActions } from '@components/add-book/state/actions';
import { BookListComponentEffectsActions } from '@components/book-list/state/actions';
import { Book } from '@models/book.interface';
import { CatalogueState } from 'app/shared/model/catalogue-state.interface';
import { initialState, bookCatalogueReducer } from './book-catalogue.reducer';

describe('bookCatalogueReducer', () => {

    const arrange = () => {
        const bookMock: Book = {
            title: 'mock title',
            author: 'mock author',
            year: 'mock year'
        };
        const initialState: CatalogueState = {
            bookList: [bookMock],
            progress: false,
            success: '',
            error: ''
        };
        return { initialState, bookMock };
    };

    it('should return the initial state', () => {
        const { initialState } = arrange();
        const action = {} as any;
        const state = bookCatalogueReducer(initialState, action);

        expect(state).toEqual(initialState);
    });

    describe('BookListComponentEffectsActions', () => {
        it('should set the error on fetchBookFail', () => {
            const error = 'Some error message';
            const action = BookListComponentEffectsActions.fetchBookFail({ error });
            const state = bookCatalogueReducer(initialState, action);

            expect(state.error).toEqual(error);
        });

        it('should clear the error on fetchBooksSuccess', () => {
            const { bookMock } = arrange();
            const state: CatalogueState = { ...initialState, error: 'Some error message' };
            const action = BookListComponentEffectsActions.fetchBooksSuccess({ bookList: [bookMock] });
            const nextState = bookCatalogueReducer(state, action);

            expect(nextState.error).toEqual('');
        });

        it('should update the bookList on populateBookList', () => {
            const { bookMock } = arrange();

            const action = BookListComponentEffectsActions.populateBookList({ bookList: [bookMock] });
            const state = bookCatalogueReducer(initialState, action);

            expect(state.bookList).toEqual([bookMock]);
        });
    });

    describe('AddBookComponentActions', () => {
        it('should update the bookList on addBook', () => {
            const { bookMock } = arrange();
            const action = AddBookComponentActions.addBook({ book: bookMock });
            const state = bookCatalogueReducer(initialState, action);

            expect(state.bookList).toEqual([bookMock]);
        });
    });

    describe('AddBookComponentEffectsActions', () => {
        it('should set the error on addBookFail', () => {
            const error = 'Some error message';
            const action = AddBookComponentEffectsActions.addBookFail({ error });
            const state = bookCatalogueReducer(initialState, action);

            expect(state.error).toEqual(error);
        });

        it('should set the success message on addBookSuccess', () => {
            const success = 'Book added successfully';
            const action = AddBookComponentEffectsActions.addBookSuccess({ success });
            const state = bookCatalogueReducer(initialState, action);

            expect(state.success).toEqual(success);
        });
    });
});