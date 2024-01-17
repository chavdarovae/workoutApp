import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppUtils } from './../../../../modules/shared-assets/utils/app-utils.service';
import { SECOND_APP_COLORS } from './core/data-access/constants/general.constants';

@Component({
	standalone: true,
	imports: [RouterModule],
	selector: 'sec-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	appColors= SECOND_APP_COLORS;
	appUtilsService = inject(AppUtils);

	constructor() {
		this.appUtilsService.setUserColors(this.appColors);
	}
}
