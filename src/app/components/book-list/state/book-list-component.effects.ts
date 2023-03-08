import { Injectable } from "@angular/core";
import { FetchBooksService } from "@services/fetch-books.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { BookListComponentActionTypes } from "./actions/book-list-component.actions";
import { BookListComponentEffectsActionTypes } from "./actions/book-list-component-effects.actions";

@Injectable()
export class BookListComponentEffects {
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

    constructor(
        private actions$: Actions,
        private getBooksService: FetchBooksService
    ) { }
}