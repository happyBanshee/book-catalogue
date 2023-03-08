import type { Book } from "@models/book.interface";
import { createAction, props } from "@ngrx/store";

export enum BookListComponentEffectsActionTypes {
    FetchBooksSuccess = '[Book List Component Effects] Fetch Books Success',
    FetchBooksFail = '[Book List Component Effects] Fetch Books Fail',
    PopulateBookList = '[Book List Component Effects] Populate Book List',
    PopulateBookListSuccess = '[Book List Component Effects] Populate Book List Success',
    PopulateBookListFail = '[Book List Component Effects] Populate Book List Fail',
}

export const fetchBooksSuccess = createAction(BookListComponentEffectsActionTypes.FetchBooksSuccess, props<{ bookList: Book[]; }>());
export const fetchBookFail = createAction(BookListComponentEffectsActionTypes.FetchBooksFail, props<{ error: string; }>());
export const populateBookList = createAction(BookListComponentEffectsActionTypes.PopulateBookList, props<{ bookList: Book[]; }>());
export const populateBookListSuccess = createAction(BookListComponentEffectsActionTypes.PopulateBookListSuccess, props<{ bookList: Book[]; }>());
export const populateBookListFail = createAction(BookListComponentEffectsActionTypes.PopulateBookListFail, props<{ error: string; }>());