import { CatalogueState } from '@models/catalogue-state.interface';
import { booksSelector, errorSelector, successSelector } from './book-list-component.selectors';

describe('BookListSelectors', () => {
    const initialState: CatalogueState = {
        bookList: [{ title: 'Book 1', author: 'Author 1', year: '2000' }],
        error: '',
        success: '',
    };

    describe('booksSelector', () => {
        it('should return the list of books', () => {
            const books = booksSelector.projector(initialState);
            expect(books).toEqual(initialState.bookList);
        });
    });

    describe('errorSelector', () => {
        it('should return the error message', () => {
            const error = errorSelector.projector(initialState);
            expect(error).toEqual(initialState.error);
        });
    });

    describe('successSelector', () => {
        it('should return the success message', () => {
            const success = successSelector.projector(initialState);
            expect(success).toEqual(initialState.success);
        });
    });
});