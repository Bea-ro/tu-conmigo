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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AnimalComponent } from '../../components/shared/animal/animal.component';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../services/animals.service';

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
  public submitButtonStyle: string = 'disabled-button';
  public isDisabled: boolean = true;
  public isSubmitted: boolean = false;

  constructor(
    private AnimalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
    });

    this.userForm.get('hasAnimals')?.valueChanges.subscribe((value) => {
      if (value) {
        this.userForm?.addControl(
          'infoAnimals',
          new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
          })
        );
      } else {
        this.userForm?.removeControl('infoAnimals');
      }
    });

    this.userForm?.valueChanges.subscribe((value) => {
      if (this.userForm?.invalid) {
        this.submitButtonStyle = 'disabled-button';
      } else {
        this.submitButtonStyle = 'able-button';
        this.isDisabled = false;
      }
    });

    this.animalId = this.activatedRoute.snapshot.params['id'];
    this.animal = this.AnimalsService.getAnimalById(this.animalId);
  }

  public hasAnimalsToggle() {
    this.hasAnimals = !this.hasAnimals;
  }

  public onSumbit() {
    this.AnimalsService.adoptAnimal(this.animalId);
    this.isSubmitted = true;
    this.router.navigate(['/animales-para-adoptar']);
  }
}
