import { FormControl } from '@angular/forms';
import { fourDigits, onlyLetters, yearInPast } from './add-book-form-validators';

describe('Validators', () => {
    describe('yearInPast', () => {
        it('should return null for a year in the past', () => {
            const control = new FormControl('1990');
            const validatorFn = yearInPast();

            const result = validatorFn(control);

            expect(result).toBeNull();
        });

        it('should return an error object for a year in the future', () => {
            const control = new FormControl('2050');
            const validatorFn = yearInPast();

            const result = validatorFn(control);

            expect(result).toEqual({ yearInPast: true });
        });
        it('should return null if control value is not a number', () => {
            const control = new FormControl('abc');
            const validatorFn = yearInPast();

            const result = validatorFn(control);

            expect(result).toBeNull();
        });
    });

    describe('fourDigits', () => {
        it('should return null for a string containing exactly four digits', () => {
            const control = new FormControl('1234');
            const validatorFn = fourDigits();

            const result = validatorFn(control);

            expect(result).toBeNull();
        });

        it('should return an error object for a string containing less than four digits', () => {
            const control = new FormControl('123');
            const validatorFn = fourDigits();

            const result = validatorFn(control);

            expect(result).toEqual({ fourDigits: true });
        });

        it('should return an error object for a string containing more than four digits', () => {
            const control = new FormControl('12345');
            const validatorFn = fourDigits();

            const result = validatorFn(control);

            expect(result).toEqual({ fourDigits: true });
        });

        it('should return an error object for a string containing non-digit characters', () => {
            const control = new FormControl('12a4');
            const validatorFn = fourDigits();

            const result = validatorFn(control);

            expect(result).toEqual({ fourDigits: true });
        });

    });

    describe('onlyLetters', () => {
        it('should return null for a string containing only letters and spaces', () => {
            const control = new FormControl('John Doe');
            const validatorFn = onlyLetters();

            const result = validatorFn(control);

            expect(result).toBeNull();
        });

        it('should return an error object for a string containing non-letter characters', () => {
            const control = new FormControl('John Doe1');
            const validatorFn = onlyLetters();

            const result = validatorFn(control);

            expect(result).toEqual({ onlyLetters: true });
        });

        it('should return an error object for a string containing more than 20 characters', () => {
            const control = new FormControl('stringoftwentycharectersandmore');
            const validatorFn = onlyLetters();

            const result = validatorFn(control);

            expect(result).toEqual({ onlyLetters: true });
        });


    });
});