import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@nodeApp/account';
import { AlertComponent } from '@nodeApp/alert';
import { AppUtilsService } from '@nodeApp/shared-assets';
import { FooterComponent, HeaderComponent } from '@nodeApp/shared-ui';
import { SECOND_APP_COLORS, SECOND_APP_MENUS } from './core/data-access/constants/general.constants';

@Component({
	standalone: true,
	imports: [RouterModule, NgIf, HeaderComponent, FooterComponent, AlertComponent],
	selector: 'sec-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	appColors= SECOND_APP_COLORS;
	appMenuItems = SECOND_APP_MENUS;
	appUtilsService = inject(AppUtilsService);
	authService = inject(AuthService);

	constructor() {
		this.appUtilsService.setUserColors(this.appColors);
	}
}
