import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    public visible = false;

    constructor() {}

    public expandMenuItem(item: HTMLDivElement) {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        } else {
            item.classList.add('selected');
        }
    }
}
