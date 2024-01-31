import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

}
