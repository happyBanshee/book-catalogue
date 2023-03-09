import type { CatalogueState } from "@models/catalogue-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const bookListFeature = createFeatureSelector<CatalogueState>('bookListFeature');

export const booksSelector = createSelector(bookListFeature,
    (state => state.bookList));
export const errorSelector = createSelector(bookListFeature,
    (state => state.error));
export const successSelector = createSelector(bookListFeature,
    (state => state.success));