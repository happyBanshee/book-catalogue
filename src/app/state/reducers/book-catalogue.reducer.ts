import { AddBookComponentActions, AddBookComponentEffectsActions } from "@components/add-book/state/actions";
import { BookListComponentEffectsActions } from "@components/book-list/state/actions";
import { createReducer, on } from "@ngrx/store";
import type { CatalogueState } from "app/shared/model/catalogue-state.interface";

export const initialState: CatalogueState = {
    bookList: [],
    error: '',
    success: '',
};

export const bookCatalogueReducer = createReducer(initialState,
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


    on(
        AddBookComponentActions.addBook, (state, action) => {
            return {
                ...state,
                error: '',
                success: '',
                bookList: [...state.bookList, action.book]
            };
        }
    ),

    on(
        AddBookComponentEffectsActions.addBookFail, (state, action) => ({
            ...state,
            error: action.error,
            success: '',
        }
        )
    ),

    on(
        AddBookComponentEffectsActions.addBookSuccess, (state, action) => ({
            ...state,
            error: '',
            success: action.success
        })),
);