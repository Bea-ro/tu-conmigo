import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from '../../components/shared/animal/animal.component';
import { Animal } from '../../models/animal';
import { AnimalsService } from '../../animals.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public oldestAnimals: Animal[] = [];

  constructor(private animalsServices: AnimalsService) {}

  public ngOnInit() {
    this.oldestAnimals = this.animalsServices.getOldestAnimals();
  }
}
