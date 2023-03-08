import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { AddBookComponentActionTypes } from '../actions/add-book-component.actions';
import { AddBookComponentEffects } from './add-book-component.effects';
import { AddBookComponentEffectsActionTypes } from '../actions/add-book-component-effects.actions';

describe('AddBookComponentEffects', () => {
    let actions$: Observable<any>;

    const arrange = () => {
        TestBed.configureTestingModule({
            providers: [
                AddBookComponentEffects,
                provideMockActions(() => actions$)
            ]
        });

        const effects = TestBed.inject(AddBookComponentEffects);
        return { effects };
    };

    it('should return AddBookSuccess action on AddBook', () => {
        actions$ = of({ type: AddBookComponentActionTypes.AddBook });
        const { effects } = arrange();
        effects.addBook$.subscribe(resultAction => {
            expect(resultAction.type).toEqual(AddBookComponentEffectsActionTypes.AddBookSuccess);
            expect(resultAction.success).toEqual('The book successfully added');
        });
    });
});