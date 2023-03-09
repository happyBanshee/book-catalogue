import { fetchBooks, BookListComponentActionTypes } from './book-list-component.actions';

describe('BookListComponent Actions', () => {
    describe('fetchBooks', () => {
        it('should create the fetchBooks action', () => {
            const action = fetchBooks();
            expect(action.type).toEqual(BookListComponentActionTypes.FetchBooks);
        });
    });
});