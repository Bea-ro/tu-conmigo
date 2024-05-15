import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css',
})
export class AnimalsListComponent {}
