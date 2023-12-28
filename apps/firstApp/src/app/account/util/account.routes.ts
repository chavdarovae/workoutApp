import { Routes } from '@angular/router';
import { UserDetailComponent } from '../feature/user-detail/user-detail.component';
import { UserListComponent } from '../feature/user-list/user-list.component';

export const ACCOUNT_ROUTES: Routes = [
	{
		path: 'users',
		component: UserListComponent,
	},
	{
		path: 'users/:id',
		component: UserDetailComponent,
	}
];
