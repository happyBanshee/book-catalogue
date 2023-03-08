import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  const arrange = () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    return { component, fixture };
  };

  it(`should have as title 'Book Catalogue'`, () => {
    const { component } = arrange();
    expect(component.title).toEqual('Book Catalogue');
  });

  it('should render title', () => {
    const { fixture } = arrange();

    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Book Catalogue');
  });
});