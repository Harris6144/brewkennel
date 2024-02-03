import { Routes } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';

export const routes: Routes = [
  { path: 'beers/:page', component: BeerListComponent }
];
