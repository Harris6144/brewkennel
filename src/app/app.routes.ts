import { Routes } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';

export const routes: Routes = [
  { path: 'beers/:page', component: BeerListComponent },
  { path: 'beer/:id', component: BeerDetailComponent }
];
