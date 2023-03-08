import { Book } from '@models/book.interface';
import { BookListComponentEffectsActions } from '.';

describe('BookListComponentEffectsActions', () => {
    describe('fetchBooksSuccess', () => {
        it('should create an action with the bookList property', () => {
            const bookList: Book[] = [
                { author: 'author mock', title: 'title mock', year: '2000' },

                { author: 'author mock', title: 'title mock', year: '2019' },
            ];
            const action = BookListComponentEffectsActions.fetchBooksSuccess({ bookList });
            expect(action.type).toEqual(BookListComponentEffectsActions.BookListComponentEffectsActionTypes.FetchBooksSuccess);
            expect(action.bookList).toEqual(bookList);
        });
    });

    describe('fetchBookFail', () => {
        it('should create an action with the error property', () => {
            const error = 'Error fetching books';
            const action = BookListComponentEffectsActions.fetchBookFail({ error });
            expect(action.type).toEqual(BookListComponentEffectsActions.BookListComponentEffectsActionTypes.FetchBooksFail);
            expect(action.error).toEqual(error);
        });
    });

    describe('populateBookList', () => {
        it('should create an action with the bookList property', () => {
            const bookList: Book[] = [
                { author: 'author mock', title: 'title mock', year: '2000' },

                { author: 'author mock', title: 'title mock', year: '2019' },
            ];
            const action = BookListComponentEffectsActions.populateBookList({ bookList });
            expect(action.type).toEqual(BookListComponentEffectsActions.BookListComponentEffectsActionTypes.PopulateBookList);
            expect(action.bookList).toEqual(bookList);
        });
    });

    describe('populateBookListSuccess', () => {
        it('should create an action with the bookList property', () => {
            const bookList: Book[] = [
                { author: 'author mock', title: 'title mock', year: '2000' },
                { author: 'author mock', title: 'title mock', year: '2019' },
            ];
            const action = BookListComponentEffectsActions.populateBookListSuccess({ bookList });
            expect(action.type).toEqual(BookListComponentEffectsActions.BookListComponentEffectsActionTypes.PopulateBookListSuccess);
            expect(action.bookList).toEqual(bookList);
        });
    });

    describe('populateBookListFail', () => {
        it('should create an action with the error property', () => {
            const error = 'Error';
            const action = BookListComponentEffectsActions.populateBookListFail({ error });
            expect(action.type).toEqual(BookListComponentEffectsActions.BookListComponentEffectsActionTypes.PopulateBookListFail);
            expect(action.error).toEqual(error);
        });
    });
});