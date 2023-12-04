import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IWorkout } from '../interface/workout.interfaces';
import { Workout } from '../models/workout.models';
import { WorkoutsService } from '../workouts.service';

@Component({
	selector: 'app-workout-create',
	templateUrl: './workout-create.component.html',
	styleUrls: ['./workout-create.component.scss']
})
export class WorkoutCreateComponent<Workout> {
	private formBuilder = inject(FormBuilder);
	private workoutsService = inject(WorkoutsService);

	createdWorkoutSnl = this.workoutsService.createdWorkoutSnl; // reference to signal not the value of the signal

	workoutForm = this.formBuilder.group({
		title: ['', [ Validators.required ]],
		reps: ['', [ Validators.required ]],
		load: ['', [ Validators.required ]]
	});

	submitWorkout() {
		const {title, reps, load, likes} = this.workoutForm.value  as any as IWorkout;
		const createObj = new Workout(title, reps, load, likes);
		this.workoutsService.modifyWorkout(createObj, 'create');
	}

	resetWorkoutForm() {
		this.workoutForm.reset();
	}
}
