import { Routes } from '@angular/router';
import { WorkoutCreateComponent } from './feature/workout-create/workout-create.component';
import { WorkoutDetailComponent } from './feature/workout-detail/workout-detail.component';
import { WorkoutListComponent } from './feature/workout-list/workout-list.component';

export const WORKOUT_ROUTES: Routes = [
	{
		path: '',
		component: WorkoutListComponent,
	},
	{
		path: 'create',
		component: WorkoutCreateComponent,
	},
	{
		path: ':id',
		component: WorkoutDetailComponent,
	}
];
