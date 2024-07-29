import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from '../../components/shared/animal/animal.component';
import { ANIMALS } from '../../services/animals-data';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css',
})
export class AnimalsListComponent implements OnInit {
  public animals: Animal[] = [];

  constructor(private animalsService: AnimalsService) {}

  public ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }
}
