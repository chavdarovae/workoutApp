import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertService } from './../../data-access/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    standalone: true,
	imports: [CommonModule, NgFor]
})
export class AlertComponent {
	alertService = inject(AlertService);
}
