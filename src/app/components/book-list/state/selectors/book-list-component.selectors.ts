import { createFeatureSelector, createSelector } from "@ngrx/store";
import type { CatalogueState } from "app/model/catalogue-state.interface";

const bookListFeature = createFeatureSelector<CatalogueState>('bookListFeature');

export const booksSelector = createSelector(bookListFeature,
    (state => state.bookList));
export const errorSelector = createSelector(bookListFeature,
    (state => state.error));