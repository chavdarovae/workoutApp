import { Component, inject } from '@angular/core';
import { IWorkout } from '../interface/workout.interfaces';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
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
