import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Data, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkoutsService } from '../../data-access/workouts.service';
import { WorkoutPreviewComponent } from '../../ui/workout-preview/workout-preview.component';
import { IWorkout } from '../../util/interface/workout.interfaces';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.scss'],
    standalone: true,
    imports: [RouterLink, MatButtonModule, WorkoutPreviewComponent, JsonPipe, AsyncPipe, NgIf],
	providers: [WorkoutsService]
})
export class WorkoutListComponent implements OnInit {
	private workoutsService = inject(WorkoutsService);
	private activatedRoute = inject(ActivatedRoute);
	data$!: Observable<Data>;

	workoutList = this.workoutsService.workoutsSnl; // reference to signal not the value of the signal

	totalWorkouts = computed(()=> this.workoutList().length);
	totalLikes = computed(()=> this.workoutList()
		.flatMap((w: IWorkout) => w.likes)
		.reduce((a, acc) => acc + a, 0));

	ngOnInit(): void {
		this.workoutsService.refreshList();
		this.data$ = this.activatedRoute.data.pipe(
			// tap((res) => console.log(res))
		);
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
