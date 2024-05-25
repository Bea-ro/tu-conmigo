import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-adopt-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adopt-form.component.html',
  styleUrl: './adopt-form.component.css',
})

// Utilizar valueChanges para escuchar los cambios en el valor del checkbox y añadir un nuevo formControl al formGroup de forma dinámica.
export class AdoptFormComponent implements OnInit {
  public userForm?: FormGroup<User>;

  public ngOnInit() {
    this.userForm = new FormGroup<User>(
      {
        name: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        surname: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),

        //         validador personalizado que compruebe que el valor introducido es un DNI español válido.
        dni: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        //comprobar edad menor a 100
        age: new FormControl(null, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        hasAnimals: new FormControl(false, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        infoAnimals: new FormControl('', {
          nonNullable: true,
        }),

        //   Validators.minLength(6)
      }
      // comparePasswords as ValidatorFn
    );

    // this.userForm
    //   .get('email')
    //   ?.valueChanges.subscribe((value) => console.log(value));
  }

  public onSumbit() {
    console.log(this.userForm?.value);
  }
}
