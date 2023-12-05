import { WorkoutUserActions } from "../../data-access/workouts.service"

export interface IWorkout {
	title: string,
	reps: number,
	load: number,
	likes: number,
	_id: string
}

export interface IWorkoutActions {
	workout: IWorkout,
	action: WorkoutUserActions
}
