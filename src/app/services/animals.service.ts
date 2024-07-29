import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { ANIMALS } from './animals-data';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private animals: Animal[] = ANIMALS;

  public getAnimals(): Animal[] {
    return this.animals;
  }
  public getOldestAnimals(): Animal[] {
    const animalsCopy = [...this.animals];
    const orderedAnimalsByAge = animalsCopy.sort((a, b) => b.age - a.age);
    return orderedAnimalsByAge.slice(0, 4);
  }

  public getAnimalById(id: string): Animal | undefined {
    return this.animals.find((animal) => animal.id === parseInt(id));
  }

  public adoptAnimal(animalId: string): void {
    this.animals = this.animals.filter(
      (animal) => animal.id !== parseInt(animalId)
    );

    // const animal = this.animals.find(
    //   (animal) => animal.id === parseInt(animalId)
    // );
    // if (animal) {
    //   let index = this.animals.indexOf(animal);
    //   if (index !== -1) {
    //     this.animals.splice(index, 1);
    //   }
    // }
  }
}
