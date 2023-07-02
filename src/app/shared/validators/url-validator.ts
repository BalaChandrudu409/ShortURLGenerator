import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appURLValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: URLValidatorDirective,
        multi: true
    }]
})
export class URLValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        let url = control.value;
        if (url?.length === 0) {
            return { 'urlInvalid': true };
        } else {
            if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(control.value)) {
                return null;
            } else {
                return { 'urlInvalid': true };
            }
        }

    }
}