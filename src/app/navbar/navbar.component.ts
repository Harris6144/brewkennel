import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'nav[app-navbar]',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './navbar.component.html',
    host: {
        'class': 'navbar navbar-expand-lg bg-primary-subtle text-primary-emphasis'
    }
})
export class NavbarComponent {

}
