import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../data-access/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
	imports: [ NgIf, AsyncPipe ]
})
export class HeaderComponent {
	authService = inject(AuthService);
}
