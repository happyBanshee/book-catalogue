import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from "rxjs";
import { AddBookComponentActionTypes } from "../actions/add-book-component.actions";
import { AddBookComponentEffectsActionTypes } from "../actions/add-book-component-effects.actions";

@Injectable()
export class AddBookComponentEffects {
    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(AddBookComponentActionTypes.AddBook),
        switchMap(() => {
            return of({
                type: AddBookComponentEffectsActionTypes.AddBookSuccess, success: "The book successfully added"
            });
        }
        ),
    ));

    constructor(
        private actions$: Actions,
    ) { }
}