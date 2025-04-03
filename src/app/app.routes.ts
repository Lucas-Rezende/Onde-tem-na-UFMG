import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { Error404Component } from './modules/error/pages/error-404/error-404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];
