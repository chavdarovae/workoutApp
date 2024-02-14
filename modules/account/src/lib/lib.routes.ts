import { Routes } from '@angular/router';
import { LogoutGuard } from './data-access/logout.gurad';
import { AboutComponent } from './feature/about/about.component';
import { LoginComponent } from './feature/login/login.component';
import { UserDetailComponent } from './feature/user-detail/user-detail.component';
import { UserListComponent } from './feature/user-list/user-list.component';

export const ACCOUNT_ROUTES: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'users',
		component: UserListComponent,
	},
	{
		path: 'users/:id',
		component: UserDetailComponent,
	},
	{
		path: 'logout',
		component: LoginComponent,
		canActivate: [ LogoutGuard ]
	}
];
