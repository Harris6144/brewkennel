import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'footer[app-footer]',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    host: {
        'class': 'bg-light-subtle text-light-emphasis px-3 py-5 text-center'
    }
})
export class FooterComponent {

}
