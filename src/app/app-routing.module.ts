import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'workouts',
		pathMatch: 'full'
	},
	{
		path: 'account',
		loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
	},
	{
		path: 'workouts',
		loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
