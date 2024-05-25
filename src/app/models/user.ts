import { FormControl } from '@angular/forms';

export interface User {
  name: FormControl<string>;
  surname: FormControl<string>;
  dni: FormControl<string>;
  age: FormControl<number | null>;
  hasAnimals: FormControl<boolean>;
  infoAnimals?: FormControl<string>;
}
