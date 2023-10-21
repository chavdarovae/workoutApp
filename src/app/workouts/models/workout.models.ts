import { IWorkout } from "../interface/workout.interfaces";

export class Workout implements IWorkout {
	title: string;
	reps: number;
	load: number;
	constructor(
		title: string,
		reps: number,
		load: number
	) {
		this.title = title;
		this.reps = reps;
		this.load = load;
	}
}
