import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'nav[app-navbar]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  host: {
    'class': 'px-4 bg-blue-500'
  }
})
export class NavbarComponent {
  router: Router;

  constructor() {
    this.router = inject(Router);
  }

  onRandomBeer() {
    this.router.navigate(['/beer/' + (Math.floor(Math.random() * 325) + 1)]);
  }
}
