import { createAction, props } from '@ngrx/store';

export enum AddBookComponentEffectsActionTypes {
    AddBookSuccess = '[Add Book Component Effects] Add Book Success',
    AddBookFail = '[Add Book Component Effects] Add Book Fail',
}

export const addBookSuccess = createAction(AddBookComponentEffectsActionTypes.AddBookSuccess, props<{ success: string; }>());
export const addBookFail = createAction(AddBookComponentEffectsActionTypes.AddBookFail, props<{ error: string; }>());