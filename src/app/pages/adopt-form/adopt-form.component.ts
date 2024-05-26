import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';
import { dnilValidator } from './customValidarors';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adopt-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adopt-form.component.html',
  styleUrl: './adopt-form.component.css',
})
export class AdoptFormComponent implements OnInit {
  public userForm?: FormGroup<User>;

  public ngOnInit() {
    this.userForm = new FormGroup<User>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      surname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      dni: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, dnilValidator()],
      }),
      age: new FormControl(null, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.max(100),
          Validators.min(18),
        ],
      }),
      hasAnimals: new FormControl(false, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      infoAnimals: new FormControl('', {
        nonNullable: true,
      }),
    });

    this.userForm.get('hasAnimals')?.valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.userForm);
      //   this.userForm.push({
      //     infoAnimals: new FormControl('', {
      //        nonNullable: true,
      //      }),
      //    })
    });
  }

  public onSumbit() {
    console.log(this.userForm?.value);
    //eliminar del listado el animal. coger el id y el array de animales y .find y .remove
  }
}
