import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';
import { Episodes } from './pages/episodes/episodes';
import { Impressum } from './pages/impressum/impressum';

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
    path: 'folgen',
    component: Episodes
  },

  {
    path: 'impressum',
    component: Impressum
  },

  {
    path: '**',
    redirectTo: ''
  }

];