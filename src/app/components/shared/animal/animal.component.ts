import { Component, Input } from '@angular/core';
import { Animal } from '../../../models/animal';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent {
  @Input() animal?: Animal;
  @Input() hideElementsAnimalCard?: boolean = false;
  @Input() adoptPageStyle?: string | null = null;
  public animalStyle: string = '';

  constructor(private router: Router) {}

  public goToForm(): void {
    if (!this.animal) {
      return;
    }
    this.router.navigate(['/adoptando-tu-animal', this.animal.id]);
  }

  public ngOnInit() {
    this.router.url === '/' || this.router.url === '/animales-para-adoptar'
      ? (this.animalStyle = 'home-animal-style')
      : (this.animalStyle = 'form-animal-style');
  }
}
