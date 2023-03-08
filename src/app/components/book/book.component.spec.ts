import { TestBed } from '@angular/core/testing';
import type { Book } from '@models/book.interface';
import { BookComponent } from './book.component';

describe('BookComponent', () => {

  const arrange = () => {
    TestBed.configureTestingModule({
    })
      .compileComponents();

    const mock: Book = { title: 'Title mock', author: 'Author mock', year: '1930' };
    const fixture = TestBed.createComponent(BookComponent);
    const component = fixture.componentInstance;

    component.book = mock;
    fixture.detectChanges();

    return { fixture, component, mock };
  };

  it('should display book title', () => {
    const { fixture, mock } = arrange();

    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.title');
    expect(title.textContent).toContain(mock.title);
  });

  it('should display book author', () => {
    const { fixture, mock } = arrange();

    const author = fixture.nativeElement.querySelector('.author');
    expect(author.textContent).toContain(mock.author);
  });

  it('should display book year', () => {
    const { fixture, mock } = arrange();

    const year = fixture.nativeElement.querySelector('.year');
    expect(year.textContent).toContain(mock.year);
  });
});