import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { WorkoutsService } from '../../data-access/workouts.service';
import { WorkoutPreviewComponent } from '../../ui/workout-preview/workout-preview.component';
import { IWorkout } from '../../util/interface/workout.interfaces';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.scss'],
    standalone: true,
    imports: [RouterLink, MatButtonModule, WorkoutPreviewComponent, JsonPipe]
})
export class WorkoutListComponent implements OnInit {
	private workoutsService = inject(WorkoutsService);
	workoutList = this.workoutsService.workoutsSnl; // reference to signal not the value of the signal
	selectedWorkout = this.workoutsService.selectedWorkoutSnl; // reference to signal not the value of the signal

	ngOnInit(): void {
		this.workoutsService.refreshList();
	}

	deleteWorkout(workout: IWorkout) {
		this.workoutsService.modifyWorkoutSubject.next({type: 'delete', workout});
	}

	likeWorkout(workout: IWorkout) {
		workout.likes = workout.likes ? workout.likes + 1 : 1;
		this.workoutsService.modifyWorkoutSubject.next({type: 'modify', workout});
	}

	selectWorkout(workout: IWorkout) {
		this.workoutsService.modifyWorkoutSubject.next({type: 'select', workout});
	}
}
