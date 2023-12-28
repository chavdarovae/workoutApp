import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { WorkoutsService } from '../../data-access/workouts.service';
import { IWorkout } from '../../util/interface/workout.interfaces';
import { Workout } from '../../util/models/workout.models';

@Component({
    selector: 'app-workout-create',
    templateUrl: './workout-create.component.html',
    styleUrls: ['./workout-create.component.scss'],
    standalone: true,
    imports: [RouterLink, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDividerModule, JsonPipe],
	providers: [WorkoutsService]
})
export class WorkoutCreateComponent {
	private formBuilder = inject(FormBuilder);
	private workoutsService = inject(WorkoutsService);

	workoutForm = this.formBuilder.group({
		title: ['', [ Validators.required ]],
		reps: ['', [ Validators.required ]],
		load: ['', [ Validators.required ]]
	});

	submitWorkout() {
		const {title, reps, load, likes} = this.workoutForm.value as any as IWorkout;
		const workout = new Workout(title, reps, load, likes);
		this.workoutsService.createWorkoutSubject.next(workout);
	}

	resetWorkoutForm() {
		this.workoutForm.reset();
	}
}
