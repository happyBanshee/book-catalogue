import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list', loadComponent: () => import('@components/book-list/book-list.component').then(c => c.BookListComponent),
  },
  {
    path: 'add', loadComponent: () => import('@components/add-book/add-book.component').then(c => c.AddBookComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: '**', redirectTo: 'list' }
];
