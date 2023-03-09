import type { Book } from "./book.interface";

export interface CatalogueState {
    bookList: Book[];
    success: string,
    error: string;
}