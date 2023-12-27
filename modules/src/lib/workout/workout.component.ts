import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-workout',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './workout.component.html',
	styleUrl: './workout.component.css',
})
export class WorkoutComponent {}
