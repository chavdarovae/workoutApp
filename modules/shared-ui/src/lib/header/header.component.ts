import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuItem } from '../utils/interfaces';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
	imports: [ RouterModule, NgClass, NgFor ]
})
export class HeaderComponent {
	@Input() menuItems!: IMenuItem[];
	@Input() logoPath!: string;
}
