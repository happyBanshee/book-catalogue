import type { Book } from '@models/book.interface';
import { createAction, props } from '@ngrx/store';

export enum AddBookComponentActionTypes {
    AddBook = '[Add Book Component] Add Book'
}

export const addBook = createAction(AddBookComponentActionTypes.AddBook, props<{ book: Book; }>());