import { AppUtils } from './../../../../modules/shared-assets/utils/app-utils.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FIRST_APP_COLORS } from './core/constants/general.constants';
import { AlertComponent } from './core/ui/alert/alert.component';
import { FooterComponent } from './core/ui/footer/footer.component';
import { HeaderComponent } from './core/ui/header/header.component';

@Component({
    selector: 'fir-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, AlertComponent]
})
export class AppComponent {
	appColors= FIRST_APP_COLORS;
	appUtilsService = inject(AppUtils);

	constructor() {
		this.appUtilsService.setUserColors(this.appColors);
	}
}
