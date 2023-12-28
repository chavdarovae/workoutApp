import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreAlertService } from '../../data-access/alert.service';

@Component({
    selector: 'core-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
	imports: [ NgIf, AsyncPipe, RouterModule ],
	providers: [CoreAlertService]
})
export class CoreHeaderComponent {
	authService = inject(CoreAlertService);
}
