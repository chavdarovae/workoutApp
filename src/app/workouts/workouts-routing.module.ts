import { Routes } from '@angular/router';
import { WorkoutCreateComponent } from './workout-create/workout-create.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

export const workoutRoutes: Routes = [
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
