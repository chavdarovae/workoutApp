import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from '@nodeApp/account';

@Injectable({
	providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
	constructor(private authService: AuthService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		this.authService.logout();
		return true;
	}
}
