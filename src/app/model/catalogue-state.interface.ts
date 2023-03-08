import type { Book } from "./book.interface";

export interface CatalogueState {
    bookList: Book[];
    error: string;
}