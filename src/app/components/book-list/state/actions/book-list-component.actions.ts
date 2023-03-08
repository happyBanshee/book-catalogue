import { createAction } from '@ngrx/store';

export enum BookListComponentActionTypes {
    FetchBooks = '[Book List Component] Fetch Books',
}

export const fetchBooks = createAction(BookListComponentActionTypes.FetchBooks);