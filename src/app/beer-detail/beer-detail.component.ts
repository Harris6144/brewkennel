import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'main[app-beer-detail]',
  standalone: true,
  imports: [],
  templateUrl: './beer-detail.component.html',
  host: {
    'class': 'px-4 py-12 bg-gray-50'
  }
})
export class BeerDetailComponent {
  location: Location;
  route: ActivatedRoute;
  beerService: BeerService;

  id: number;
  paramsSubscription: Subscription;

  beer: Beer | null;
  beerSubscription: Subscription;

  constructor() {
    this.location = inject(Location);
    this.route = inject(ActivatedRoute);
    this.beerService = inject(BeerService);

    this.id = 1;
    this.paramsSubscription = new Subscription;

    this.beer = null;
    this.beerSubscription = new Subscription;
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.beer = null;
      this.id = +params['id'];
      this.beerSubscription = this.beerService.getBeer(this.id).subscribe(beer => this.beer = beer);
    });
  }

  onBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.beerSubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }
}
