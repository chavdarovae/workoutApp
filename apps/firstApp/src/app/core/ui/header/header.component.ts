import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@nodeApp/account';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
	imports: [ NgIf, AsyncPipe, RouterModule ]
})
export class HeaderComponent {
	authService = inject(AuthService);
}
