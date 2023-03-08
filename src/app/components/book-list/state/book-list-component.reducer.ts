import { createReducer, on } from "@ngrx/store";
import type { CatalogueState } from "app/model/catalogue-state.interface";
import { BookListComponentEffectsActions } from "./actions";


export const initialState: CatalogueState = { bookList: [], error: '' };

export const bookListComponentReducer = createReducer(initialState,
    on(
        BookListComponentEffectsActions.fetchBookFail, (state, action) => ({
            ...state,
            error: action.error
        }
        )
    ),

    on(
        BookListComponentEffectsActions.fetchBooksSuccess, (state) => ({
            ...state,
            error: ''
        })),

    on(
        BookListComponentEffectsActions.populateBookList, (state, action) => (
            {
                ...state,
                bookList: action.bookList
            })),
);