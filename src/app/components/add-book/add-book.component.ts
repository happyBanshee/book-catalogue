import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book } from '@models/book.interface';
import { CatalogueState } from '@models/catalogue-state.interface';
import { Store } from '@ngrx/store';
import { AddBookComponentActions } from './state/actions';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private store: Store<CatalogueState>) {
  }

  public form = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    author: new FormControl('', { nonNullable: true }),
    year: new FormControl('', { nonNullable: true }),
  });

  addBook() {
    const formValue: Book =
    {
      year: '2333',
      title: 'title',
      author: 'author'
    };
    //this.form.getRawValue();

    this.store.dispatch(AddBookComponentActions.addBook({ book: formValue }));
  }
}
