import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const rootEndpoint: string = 'https://api.punkapi.com/v2/';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }
}
