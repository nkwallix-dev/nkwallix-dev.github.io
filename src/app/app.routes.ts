import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'charaktere',
    component: Characters
  },
  {
    path: '**',
    redirectTo: ''
  }
];