import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { environment } from '@nodeApp/environments';
import { AlertService } from '@nodeApp/alert';
import { BehaviorSubject, Observable, Subject, shareReplay, switchMap, tap } from 'rxjs';
import { IWorkout } from '../util/interface/workout.interfaces';

export type WorkoutUserAction = { type: 'delete' | 'modify' | 'select', workout?: IWorkout };

@Injectable()
export class WorkoutsService {
	private http = inject(HttpClient);
	private alertSrvice = inject(AlertService);
	private router = inject(Router);

	workoutApi = environment.apiUrl + '/api/workouts';

	_refreshList$: BehaviorSubject<boolean> = new BehaviorSubject(true);

	// list view subscription
	workoutsSnl: Signal<IWorkout[]> = toSignal(this.getWorkouts(), { initialValue: [] });

	// detail view subscription
	modifyWorkoutSubject: Subject<WorkoutUserAction> = new Subject();
	selectedWorkoutSnl: Signal<IWorkout | undefined> = toSignal(this.getWorkout(), { initialValue: undefined });

	// create view subscription
	createWorkoutSubject: Subject<IWorkout> = new Subject();
	createdWorkoutSnl: Signal<IWorkout | undefined> = toSignal(this.createWorkout(), { initialValue: undefined });

	// proba
	// proba = 0;
	// probaSnl = toSignal(this.getRunningTime(), {initialValue: undefined});
	// getRunningTime(): Observable<number> {
	// 	return new Observable<number>(() => {
	// 		setInterval(() => {
	// 			console.log(++this.proba);
	// 		}, 1000);
	// 	});
	// }

	refreshList() {
		this._refreshList$.next(true);
	}

	// GET all workouts
	getWorkouts(): Observable<IWorkout[]> {
		return this._refreshList$.asObservable().pipe(
			switchMap(() => this.http.get<IWorkout[]>(this.workoutApi)),
			shareReplay()
		);
	}

	// GET a single workout
	getWorkout(): Observable<IWorkout> {
		return this.modifyWorkoutSubject.asObservable().pipe(
			switchMap((actionData: WorkoutUserAction) => this.userInteractionToObservable(actionData)),

		)
	}

	// GET a single workout
	createWorkout(): Observable<IWorkout> {
		return this.createWorkoutSubject.asObservable().pipe(
			switchMap((workout: IWorkout) => this.http.post<IWorkout>(this.workoutApi, workout)),
			tap(() => {
				this.alertSrvice.showAlert(new Alert('New workout has been created.', 'success'));
				this.router.navigate(['/workouts']);
			})
		)
	}

	private userInteractionToObservable(actionData: WorkoutUserAction): Observable<IWorkout> {
		switch (actionData.type) {
			case 'select':
				return this.http.get<IWorkout>(this.workoutApi + '/' + actionData.workout?._id);
			case 'modify':
				return this.http.patch<IWorkout>(this.workoutApi + '/' + actionData.workout?._id, actionData.workout).pipe(
					tap(() => {
						this.refreshList();
						this.alertSrvice.showAlert(new Alert('The selected workout has been updated.', 'success'));
					})
				);
			case 'delete':
				return this.http.delete<IWorkout>(this.workoutApi + '/' + actionData.workout?._id).pipe(
					tap(() => {
						this.refreshList();
						this.alertSrvice.showAlert(new Alert('The selected workout has been deleted.', 'success'));
					})
				);
		}
	}
}
