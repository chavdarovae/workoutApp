import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { IWorkout } from './interface/workout.interfaces';

@Injectable({
	providedIn: 'root'
})
export class WorkoutsService {
	workoutApi = environment.apiUrl + '/api/workouts';
	_workouts$: BehaviorSubject<any> = new BehaviorSubject([]);
	workouts$: Observable<IWorkout[]> = this._workouts$.asObservable();

	_refreshList$: BehaviorSubject<any> = new BehaviorSubject(true);


	constructor( private http: HttpClient) {}

	refreshList() {
		this._refreshList$.next(true);
	}

	// GET all workouts
	getWorkouts(): Observable<IWorkout[]> {
		return this._refreshList$.asObservable().pipe(
			switchMap(() => this.http.get<IWorkout[]>(this.workoutApi)),
			tap((res) => this._workouts$.next(res)),
			shareReplay()
		);
	}

	// GET a single workout
	getWorkout(id: string): Observable<any> {
		return this.http.get<IWorkout>(this.workoutApi + '/' + id);
	}

	// POST a workout
	createWorkout(workout: any): Observable<any> {
		return this.http.post<IWorkout>(this.workoutApi, workout).pipe(
			tap(()=> this.refreshList())
		);
	}

	// DELETE a workout
	deleteWorkout(id: string): Observable<any> {
		return this.http.delete<IWorkout>(this.workoutApi + '/' + id).pipe(
			tap(()=> this.refreshList())
		);
	}

	// UPDATE a workout
	patchWorkout(id: string, workout: any): Observable<any> {
		return this.http.patch<IWorkout>(this.workoutApi + '/' + id, workout).pipe(
			tap(()=> this.refreshList())
		);
	}

}
