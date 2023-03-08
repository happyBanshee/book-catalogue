import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '@models/book.interface';
import { CatalogueState } from '@models/catalogue-state.interface';
import { Store } from '@ngrx/store';
import { fourDigits, onlyLetters, yearInPast } from './add-book-form-validators';
import { AddBookComponentActions } from './state/actions';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private store: Store<CatalogueState>) {
  }

  public form = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required, onlyLetters()] }),
    author: new FormControl('', { nonNullable: true, validators: [Validators.required, onlyLetters()] }),
    year: new FormControl('', { nonNullable: true, validators: [Validators.required, fourDigits(), yearInPast()] }),
  });

  get title() { return this.form.get('title'); }
  get author() { return this.form.get('author'); }
  get year() { return this.form.get('year'); }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const formValue: Book =
      this.form.getRawValue();

    this.store.dispatch(AddBookComponentActions.addBook({ book: formValue }));
  }
}
