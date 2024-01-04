import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IWorkout } from '../../util/interface/workout.interfaces';
import { WorkoutsService } from '../../data-access/workouts.service';

@Component({
    selector: 'app-workout-detail',
    templateUrl: './workout-detail.component.html',
    styleUrls: ['./workout-detail.component.scss'],
    standalone: true,
    imports: [NgIf, MatCardModule, MatDividerModule, MatButtonModule],
	providers: [WorkoutsService]
})
export class WorkoutDetailComponent {
	@Input() workout!: IWorkout;
	@Output() likeWorkout: EventEmitter<IWorkout> =  new EventEmitter();
	@Output() deleteWorkout: EventEmitter<IWorkout> =  new EventEmitter();
}
