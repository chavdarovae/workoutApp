import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, filter, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { IWorkout, IWorkoutActions } from './interface/workout.interfaces';


export type WorkoutUserActions = 'delete' | 'modify';

@Injectable({
	providedIn: 'root'
})
export class WorkoutsService {
	private http = inject(HttpClient);

	workoutApi = environment.apiUrl + '/api/workouts';
	_refreshList$: BehaviorSubject<any> = new BehaviorSubject(true);

	modifyWorkoutListSubj: BehaviorSubject<any> = new BehaviorSubject({ workout: {}, action: 'like' });
	workoutsSnl: Signal<IWorkout[]> = toSignal(this.getWorkouts(), { initialValue: [] });

	private selectedWorkoutIdSnl: WritableSignal<string | undefined> = signal(undefined);
	selectedWorkoutSnl: Signal<any> = toSignal(this.getWorkout(), { initialValue: undefined });

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
	getWorkout(): Observable<any> {
		return toObservable(this.selectedWorkoutIdSnl).pipe(
			filter((id: string | undefined) => !!id),
			switchMap((id: string | undefined) => this.http.get<IWorkout>(this.workoutApi + '/' + id)),
			switchMap(() => this.modifyWorkoutListSubj.asObservable()
				.pipe(
					switchMap((actionData: IWorkoutActions) => this.reduceUserDrivenActionsToObservabel(actionData))
				)
			),
			tap(() => this.refreshList()),
			shareReplay()
		)
	}

	// POST a single workout
	createWorkout(workout: any): Observable<IWorkout> {
		return this.http.post<IWorkout>(this.workoutApi, workout)
	}

	// Modify a workout
	modifyWorkout(workout: IWorkout, action?: WorkoutUserActions): void {
		this.selectedWorkoutIdSnl.set(workout._id);
		this.modifyWorkoutListSubj.next({ workout, action });
	}

	private reduceUserDrivenActionsToObservabel(actionData: IWorkoutActions): Observable<IWorkout> {
		switch (actionData.action) {
			case 'modify':
				return this.http.patch<IWorkout>(this.workoutApi + '/' + actionData.workout._id, actionData.workout);
			case 'delete':
				return this.http.delete<IWorkout>(this.workoutApi + '/' + actionData.workout._id);
		}
	}
}
