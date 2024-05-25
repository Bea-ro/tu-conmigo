import { Component, Input } from '@angular/core';
import { ANIMALS } from '../../../services/animals-data';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent {
  @Input() public animal: Animal = {
    id: 0,
    name: '',
    description: '',
    age: 0,
    type: '',
    image: '',
  };
  //mandar el animal desde el padre

  public goToForm(): void {
    //navegar al formulario
  }
}
