import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function yearInPast(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const currentYear = new Date().getFullYear();
        const yearInPast = currentYear <= control.value;

        return yearInPast ? { yearInPast: true } : null;
    };
}

export function fourDigits(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const regex = new RegExp(`^[0-9]{4}$`); // only 4 digits
        const fourDigits = regex.test(control.value);

        return fourDigits ? null : { fourDigits: true };
    };
}

export function onlyLetters(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const regex = new RegExp(`^[a-zA-Z ]{1,20}$`); // 1-20  letters divided by spaces
        const onlyLetters = regex.test(control.value);

        return onlyLetters ? null : { onlyLetters: true };
    };
}

