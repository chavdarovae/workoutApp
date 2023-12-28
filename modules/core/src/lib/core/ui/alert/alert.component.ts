import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CoreAlertService } from '../../data-access/alert.service';

@Component({
    selector: 'core-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    standalone: true,
	imports: [CommonModule, NgFor],
	providers: [CoreAlertService]
})
export class CoreAlertComponent {
	alertService = inject(CoreAlertService);
}
