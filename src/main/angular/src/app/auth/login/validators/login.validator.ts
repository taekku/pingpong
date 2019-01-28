import { AbstractControl } from '@angular/forms';

export function loginIdValidator(control: AbstractControl): {
  [key: string]: any} | null {
  const valid = /^\d+$/.test(control.value);
  return valid ? null : {invalidNumber: {valid: false, value: control.value}};
}

export function passwordValidator(control: AbstractControl): {
  [key: string]: any} | null {
  const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(control.value);
    return valid ? null : { passwordPattern: {valid: false, value: control.value} };
}
