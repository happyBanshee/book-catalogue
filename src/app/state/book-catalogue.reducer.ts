import { AddBookComponentActions, AddBookComponentEffectsActions } from "@components/add-book/state/actions";
import { createReducer, on } from "@ngrx/store";
import type { CatalogueState } from "app/shared/model/catalogue-state.interface";
import { BookListComponentEffectsActions } from "../components/book-list/state/actions";

export const initialState: CatalogueState = {
    bookList: [],
    error: '',
    success: '',
    progress: false,
    book: {
        title: '', author: '', year: ''
    }
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
                progress: true,
                bookList: [...state.bookList, action.book]
            };
        }
    ),

    on(
        AddBookComponentEffectsActions.addBookFail, (state, action) => ({
            ...state,
            error: action.error,
            success: '',
            progress: false
        }
        )
    ),

    on(
        AddBookComponentEffectsActions.addBookSuccess, (state, action) => ({
            ...state,
            error: '',
            progress: false,
            success: action.success
        })),
);