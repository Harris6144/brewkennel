import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beer } from './beer.model';

const rootEndpoint: string = 'https://api.punkapi.com/v2/';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }

  getBeers(page: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(rootEndpoint + 'beers?page=' + page);
  }
}
