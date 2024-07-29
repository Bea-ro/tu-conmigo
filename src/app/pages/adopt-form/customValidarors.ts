import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dnilValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    const isValid = dniRegex.test(control.value);

    if (control.value === '') {
      return null;
    }
    return isValid ? null : { invalidDni: true };
  };
}
