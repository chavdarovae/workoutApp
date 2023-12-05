import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, shareReplay, switchMap, tap } from 'rxjs';
import { AlertService } from 'src/app/core/data-access/alert.service';
import { Alert } from 'src/app/core/util/alert.model';
import { environment } from 'src/environments/environment';
import { IWorkout, IWorkoutActions } from '../util/interface/workout.interfaces';


export type WorkoutUserActions = 'delete' | 'modify' | 'create';

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
					filter((actionData: IWorkoutActions) => actionData.action !== 'create'),
					switchMap((actionData: IWorkoutActions) => this.reduceUserDrivenActionsToObservabel(actionData))
				)
			),
			tap(() => this.refreshList()),
			shareReplay()
		)
	}

	createWorkout(): Observable<IWorkout> {
		return this.modifyWorkoutListSubj.asObservable().pipe(
			filter((actionData: IWorkoutActions) => actionData.action === 'create'),
			switchMap((actionData: IWorkoutActions)=>this.http.post<IWorkout>(this.workoutApi, actionData.workout)),
			tap(() => {
				this.refreshList();
				this.alertSrvice.showAlert(new Alert('New workout has been created.', 'success'));
				this.router.navigate(['/workouts']);
			}),
			shareReplay()
		)
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
			case 'create':
				return this.http.post<IWorkout>(this.workoutApi, actionData.workout);
		}
	}
}
