import { Component } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { IWorkout } from '../interface/workout.interfaces';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent {

	polling$: Observable<IWorkout[]> =this.workoutsService.getWorkouts();
	delSubject: Subject<string> = new Subject();
	del$: Observable<any> = this.delSubject.asObservable().pipe(
		switchMap((id: string) => this.workoutsService.deleteWorkout(id))
	);

	constructor (public workoutsService: WorkoutsService) {}
}
