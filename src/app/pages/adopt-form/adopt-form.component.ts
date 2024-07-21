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
  public hasAnimals?: boolean = false;
  public animalId: string = '';
  public submitButtonStyle: string = 'unable-button';

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

    this.animalId = this.activatedRoute.snapshot.params['id'];
    this.animal = this.AnimalsService.getAnimalById(this.animalId);

    console.log(this.userForm.invalid);
    //this.userForm.touched && this.userForm.invalid && this.submitButtonStyle = 'unable-button'
    //this.userForm.touched && !this.userForm.invalid && this.submitButtonStyle = 'able-button'
  }

  public hasAnimalsToggle() {
    this.hasAnimals = !this.hasAnimals;
  }

  public onSumbit() {
    this.AnimalsService.adoptAnimal(this.animalId);
    //limpiar formulario y poner mensaje de hemos recibido tu mensaje y vamos a valorar tu solicitud, recibirás respuesta...
  }
}
