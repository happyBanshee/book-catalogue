import type { Book } from "./book.interface";

export interface CatalogueState {
    bookList: Book[];
    book: Book,
    success: string,
    error: string;
    progress: boolean;
}