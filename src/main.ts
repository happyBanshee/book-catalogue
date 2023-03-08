import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AddBookComponentEffects } from "@components/add-book/state/effects/add-book-component.effects";
import { BookListComponentEffects } from "@components/book-list/state/book-list-component.effects";
import { bookCatalogueReducer } from "app/state/book-catalogue.reducer";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { FetchBooksService } from "@services/fetch-books.service";
import { AppComponent } from "app/app.component";
import { routes } from "./app/app-routing";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({
      bookListFeature: bookCatalogueReducer
    }
    ),
    importProvidersFrom(
      HttpClientModule
    ),
    { provide: FetchBooksService },
    provideEffects([BookListComponentEffects, AddBookComponentEffects]),

  ],
}).catch((err) => console.error(err));