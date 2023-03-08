import { Injectable } from "@angular/core";
import { FetchBooksService } from "@services/fetch-books.service";
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { BookListComponentActionTypes } from "./actions/book-list-component.actions";
import { BookListComponentEffectsActionTypes } from "./actions/book-list-component-effects.actions";
import { Action } from "@ngrx/store";
import { BookListComponentActions } from "./actions";

@Injectable()
export class BookListComponentEffects implements OnInitEffects {
    fetchBooks$ = createEffect(() => this.actions$.pipe(
        ofType(BookListComponentActionTypes.FetchBooks),
        switchMap(() => this.getBooksService.fetchBooks$()
            .pipe(
                map(bookList => ({ type: BookListComponentEffectsActionTypes.FetchBooksSuccess, bookList })
                ),
                catchError((error) => (of({ type: BookListComponentEffectsActionTypes.FetchBooksFail, error }))
                ))
        )));

    fetchBooksSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(BookListComponentEffectsActionTypes.FetchBooksSuccess),
        switchMap(({ bookList }) => {
            return of({
                type: BookListComponentEffectsActionTypes.PopulateBookList, bookList
            });
        }
        ),
    ));

    ngrxOnInitEffects(): Action {
        return BookListComponentActions.fetchBooks();
    }

    constructor(
        private actions$: Actions,
        private getBooksService: FetchBooksService
    ) { }
}