import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list', loadComponent: () => import('@components/book-list/book-list.component').then(c => c.BookListComponent),
  },
  { path: '**', redirectTo: 'list' }
];
