import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import type { Book } from '@models/book.interface';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AddBookComponent } from './add-book.component';

describe('AddBookComponent', () => {
  const arrange = (formValue?: Book) => {
    const bookMock = {
      title: 'mock title',
      author: 'mock author',
      year: '2000'
    };

    const mocks = {
      form: formValue || bookMock,
      state: {
        bookList: [bookMock],
        success: '',
        error: '',
        progress: false
      }
    };

    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ],
      imports: [ReactiveFormsModule, CommonModule],
    }).compileComponents();

    const fixture = TestBed.createComponent(AddBookComponent);
    const component = fixture.componentInstance;
    const store = TestBed.inject(MockStore);
    component.form.setValue(mocks.form);
    fixture.detectChanges();

    return { component, store, fixture };
  };

  it('should submit valid form', () => {
    const { store, component } = arrange();
    spyOn(store, 'dispatch');
    component.submit();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should not submit invalid form', () => {
    const { store, component } = arrange({ title: '', author: '', year: '' });

    spyOn(store, 'dispatch');
    component.submit();
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});