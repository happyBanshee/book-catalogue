import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AddBookComponentEffects } from "@components/add-book/state/effects/add-book-component.effects";
import { BookListComponentEffects } from "@components/book-list/state/effects/book-list-component.effects";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { FetchBooksService } from "@services/fetch-books.service";
import { AppComponent } from "app/app.component";
import { bookCatalogueReducer } from "app/state/reducers/book-catalogue.reducer";
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