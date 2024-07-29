import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    title: 'Home Page',
  },
  {
    path: 'animales-para-adoptar',
    loadComponent: () =>
      import('./pages/animals-list/animals-list.component').then(
        (c) => c.AnimalsListComponent
      ),
    title: 'Animales',
  },
  {
    path: 'adoptando-tu-animal/:id',
    loadComponent: () =>
      import('./pages/adopt-form/adopt-form.component').then(
        (c) => c.AdoptFormComponent
      ),
    title: 'Adoptando',
  },
];
