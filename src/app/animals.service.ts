import { Injectable } from '@angular/core';
import { Animal } from './models/animal';
import { ANIMALS } from './services/animals-data';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private animals: Animal[] = ANIMALS;

  public getAnimals(): Animal[] {
    return this.animals;
  }
  public getOldestAnimals(): Animal[] {
    const orderedAnimalsByAge = this.animals.sort((a, b) => b.age - a.age);
    return orderedAnimalsByAge.slice(0, 4);
  }

  public getAnimalById(id: string): Animal | undefined {
    console.log(this.animals.find((animal) => animal.id === parseInt(id)));
    return this.animals.find((animal) => animal.id === parseInt(id));
  }

  public adoptAnimal(animalId: number): void {
    const animal = this.animals.find((animal) => animal.id === animalId);
    if (animal) {
      let index = this.animals.indexOf(animal);
      if (index !== -1) {
        this.animals.splice(index, 1);
      }
    }
  }
}
