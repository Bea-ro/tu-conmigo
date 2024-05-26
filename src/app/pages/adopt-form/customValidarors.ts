import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dnilValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    // { errorPersonalizado: true } --> Hay un error
    // null --> No hay ningun error
    const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    const isValid = dniRegex.test(control.value);
    if (control.value === '') {
      return null;
    }
    return isValid ? null : { invalidDni: true };
  };
}
