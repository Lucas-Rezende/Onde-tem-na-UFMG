import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/pages/home/home.component').then((m) => m.HomeComponent),
    data: { hideFooter: true }
  },
  {
    path: 'lanchonetes',
    loadComponent: () =>
      import('./modules/lanchonetes/lanchonetes.component').then((m) => m.LanchonetesComponent)
  },
  {
    path: 'lanchonete/:nome',
    loadComponent: () =>
      import('./modules/lanchonetes-info/lanchonetes-info.component').then((m) => m.LanchonetesInfoComponent)
  },
  {
    path: 'comparar-precos',
    loadComponent: () =>
      import('./modules/comparar-precos/comparar-precos.component').then((m) => m.CompararPrecosComponent)
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./modules/contato/contato.component').then((m) => m.ContatoComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./modules/error/pages/error-404/error-404.component').then((m) => m.Error404Component)
  }
];
