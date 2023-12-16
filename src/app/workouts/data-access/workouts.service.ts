import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, shareReplay, switchMap, tap } from 'rxjs';
import { AlertService } from 'src/app/core/data-access/alert.service';
import { Alert } from 'src/app/core/util/alert.model';
import { environment } from 'src/environments/environment';
import { IWorkout } from '../util/interface/workout.interfaces';

export type WorkoutUserAction = { type: 'delete' | 'modify' | 'create', workout?: IWorkout };

@Injectable({
	providedIn: 'root'
})
export class WorkoutsService {
	private http = inject(HttpClient);
	private alertSrvice = inject(AlertService);
	private router = inject(Router);

	workoutApi = environment.apiUrl + '/api/workouts';
	_refreshList$: BehaviorSubject<any> = new BehaviorSubject(true);

	modifyWorkoutListSubj: BehaviorSubject<any> = new BehaviorSubject({ workout: {}, action: 'like' });
	workoutsSnl: Signal<IWorkout[]> = toSignal(this.getWorkouts(), { initialValue: [] });

	private selectedWorkoutIdSnl: WritableSignal<string | undefined> = signal(undefined);
	selectedWorkoutSnl: Signal<any> = toSignal(this.getWorkout(), { initialValue: undefined });
	createdWorkoutSnl: Signal<any> = toSignal(this.createWorkout(), { initialValue: undefined });

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
		return toObservable(this.selectedWorkoutIdSnl).pipe(
			filter((id: string | undefined) => !!id),
			switchMap((id: string | undefined) => this.http.get<IWorkout>(this.workoutApi + '/' + id)),
			switchMap(() => this.modifyWorkoutListSubj.asObservable()
				.pipe(
					filter((actionData: WorkoutUserAction) => actionData.type !== 'create'),
					switchMap((actionData: WorkoutUserAction) => this.userInteractionToObservable(actionData))
				)
			),
			tap(() => this.refreshList()),
			shareReplay()
		)
	}

	createWorkout(): Observable<IWorkout> {
		return this.modifyWorkoutListSubj.asObservable().pipe(
			filter((actionData: WorkoutUserAction) => actionData.type === 'create'),
			switchMap((actionData: WorkoutUserAction)=>this.http.post<IWorkout>(this.workoutApi, actionData.workout)),
			shareReplay()
		)
	}

	// Modify a workout
	modifyWorkout(action: WorkoutUserAction): void {
		this.selectedWorkoutIdSnl.set(action.workout?._id);
		this.modifyWorkoutListSubj.next({ workout: action.workout, type: action.type });
	}

	private userInteractionToObservable(actionData: WorkoutUserAction): Observable<IWorkout> {
		switch (actionData.type) {
			case 'modify':
				return this.http.patch<IWorkout>(this.workoutApi + '/' + actionData.workout?._id, actionData.workout).pipe(
					tap(() => {
						this.alertSrvice.showAlert(new Alert('The workout like has been registered', 'success'));
					})
				);
			case 'delete':
				return this.http.delete<IWorkout>(this.workoutApi + '/' + actionData.workout?._id).pipe(
					tap(() => {
						this.alertSrvice.showAlert(new Alert('The selected workout has been deleted.', 'success'));
					})
				);
			case 'create':
				return this.http.post<IWorkout>(this.workoutApi, actionData.workout).pipe(
					tap(() => {
						this.alertSrvice.showAlert(new Alert('New workout has been created.', 'success'));
						this.router.navigate(['/workouts']);
					})
				);
		}
	}
}
