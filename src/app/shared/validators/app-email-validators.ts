import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  return (control) => {
    return control.value === '' ||
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
