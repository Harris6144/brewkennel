import { Routes } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'beers/1', pathMatch: 'full' },
  { path: 'beers/:page', component: BeerListComponent },
  { path: 'beer/:id', component: BeerDetailComponent }
];
