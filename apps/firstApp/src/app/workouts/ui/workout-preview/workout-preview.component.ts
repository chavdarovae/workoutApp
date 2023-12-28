import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IWorkout } from '../../util/interface/workout.interfaces';

@Component({
    selector: 'app-workout-preview',
    templateUrl: './workout-preview.component.html',
    styleUrls: ['./workout-preview.component.scss'],
    standalone: true,
    imports: [NgIf, MatCardModule, MatDividerModule, MatButtonModule]
})
export class WorkoutPreviewComponent {
	@Input() workout!: IWorkout;
	@Output() likeWorkout: EventEmitter<IWorkout> =  new EventEmitter();
	@Output() deleteWorkout: EventEmitter<IWorkout> =  new EventEmitter();
}
