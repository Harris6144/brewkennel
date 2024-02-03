import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'main[app-beer-list]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './beer-list.component.html',
  host: {
    'class': 'px-4 py-12 bg-gray-50'
  }
})
export class BeerListComponent {
  route: ActivatedRoute;
  beerService: BeerService;

  page: number;
  pageCount: number;
  paramsSubscription: Subscription;

  beers: Beer[] | null;
  beersSubscription: Subscription;

  constructor() {
    this.route = inject(ActivatedRoute);
    this.beerService = inject(BeerService);

    this.page = 1;
    this.pageCount = 13;
    this.paramsSubscription = new Subscription;

    this.beers = null;
    this.beersSubscription = new Subscription;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.beers = null;
      this.page = +params['page'];
      this.beersSubscription = this.beerService.getBeers(this.page).subscribe(beers => this.beers = beers);
    });
  }

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }
}
