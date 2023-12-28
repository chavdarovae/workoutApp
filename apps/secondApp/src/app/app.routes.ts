import { Routes } from '@angular/router';

export const SECOND_APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'workouts',
		pathMatch: 'full'
	},
	{
		path: 'workouts',
		loadChildren: () => import('@workouts').then(r => r.WORKOUT_ROUTES)
	}
];
