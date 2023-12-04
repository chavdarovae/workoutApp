import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWorkout } from './../interface/workout.interfaces';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss']
})
export class WorkoutDetailComponent {
	@Input() workout!: IWorkout;
	@Output() likeWorkout: EventEmitter<IWorkout> =  new EventEmitter();
	@Output() deleteWorkout: EventEmitter<IWorkout> =  new EventEmitter();
}
