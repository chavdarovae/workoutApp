import { Routes } from '@angular/router';

export const FIRST_APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadComponent: () => import('./account/feature/login/login.component').then(c => c.LoginComponent)
	},
	{
		path: 'account',
		loadChildren: () => import('./account/util/account.routes').then(r => r.ACCOUNT_ROUTES)
	},
	{
		path: 'workouts',
		loadChildren: () => import('@workouts').then(r => r.WORKOUT_ROUTES)
	},
	{
		path: 'about',
		loadComponent: () => import('./account/feature/about/about.component').then(c => c.AboutComponent)
	},
];
