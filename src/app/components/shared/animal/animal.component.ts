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

  constructor(private router: Router) {}

  public goToForm(): void {
    if (!this.animal) {
      return;
    }
    this.router.navigate(['/adoptando-tu-animal', this.animal.id]);
  }
}
