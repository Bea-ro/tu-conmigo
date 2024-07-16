import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/user';
import { dnilValidator } from './customValidarors';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimalComponent } from '../../components/shared/animal/animal.component';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../animals.service';

@Component({
  selector: 'app-adopt-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AnimalComponent, RouterLink],
  templateUrl: './adopt-form.component.html',
  styleUrl: './adopt-form.component.css',
})
export class AdoptFormComponent implements OnInit {
  public userForm?: FormGroup<User>;
  public animal?: Animal;

  constructor(
    private AnimalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) {}

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

    this.userForm
      .get('hasAnimals')
      ?.valueChanges.subscribe((value) => console.log(value));

    const animalId = this.activatedRoute.snapshot.params['id'];
    this.animal = this.AnimalsService.getAnimalById(animalId);
  }

  public onSumbit() {
    console.log(this.userForm?.value);
    //eliminar del listado el animal. coger el id y el array de animales y .find y .remove
  }
}
