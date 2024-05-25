import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimalComponent } from '../../components/shared/animal/animal.component';
import { ANIMALS } from '../../services/animals-data';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css',
})
export class AnimalsListComponent {
  public animals: Animal[] = ANIMALS;
}
