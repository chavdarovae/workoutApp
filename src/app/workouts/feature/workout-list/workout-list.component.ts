import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { WorkoutsService } from '../../data-access/workouts.service';
import { IWorkout } from '../../util/interface/workout.interfaces';
import { WorkoutDetailComponent } from '../workout-detail/workout-detail.component';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.scss'],
    standalone: true,
    imports: [RouterLink, MatButtonModule, WorkoutDetailComponent, JsonPipe]
})
export class WorkoutListComponent {
	private workoutsService = inject(WorkoutsService);
	workoutList = this.workoutsService.workoutsSnl; // reference to signal not the value of the signal
	selectedWorkout = this.workoutsService.selectedWorkoutSnl; // reference to signal not the value of the signal
	createdWorkoutSnl = this.workoutsService.createdWorkoutSnl; // reference to signal not the value of the signal

	deleteWorkout(workout: IWorkout) {
		this.workoutsService.modifyWorkout(workout, 'delete');
	}

	likeWorkout(workout: IWorkout) {
		workout.likes = workout.likes ? workout.likes + 1 : 1;
		this.workoutsService.modifyWorkout(workout, 'modify');
	}
}
