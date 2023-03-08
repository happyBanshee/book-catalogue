import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { BookListComponentEffects } from "@components/book-list/state/book-list-component.effects";
import { bookListComponentReducer } from "@components/book-list/state/book-list-component.reducer";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { FetchBooksService } from "@services/fetch-books.service";
import { AppComponent } from "app/app.component";
import { routes } from "./app/app-routing";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ bookListFeature: bookListComponentReducer }
    ),
    importProvidersFrom(
      HttpClientModule
    ),
    { provide: FetchBooksService },
    provideEffects(BookListComponentEffects),

  ],
}).catch((err) => console.error(err));