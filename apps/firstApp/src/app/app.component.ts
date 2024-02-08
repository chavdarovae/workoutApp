import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@nodeApp/account';
import { AlertComponent } from '@nodeApp/alert';
import { AppUtilsService } from '@nodeApp/shared-assets';
import { FooterComponent, HeaderComponent } from '@nodeApp/shared-ui';
import { FIRST_APP_COLORS, FIRST_APP_MENUS } from './core/constants/general.constants';

@Component({
    selector: 'fir-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, AlertComponent, NgIf]
})
export class AppComponent {
	appColors = FIRST_APP_COLORS;
	appMenuItems = FIRST_APP_MENUS;
	appUtilsService = inject(AppUtilsService);
	authService = inject(AuthService);

	constructor() {
		this.appUtilsService.setUserColors(this.appColors);
	}
}
