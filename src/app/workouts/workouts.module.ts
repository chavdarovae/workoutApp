import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { WorkoutCreateComponent } from './workout-create/workout-create.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { workoutRoutes } from './workouts-routing.module';


@NgModule({
  declarations: [
    WorkoutCreateComponent,
    WorkoutListComponent,
    WorkoutDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(workoutRoutes),
	AngularMaterialModule
  ]
})
export class WorkoutsModule { }
