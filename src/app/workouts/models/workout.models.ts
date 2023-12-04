import { IWorkout } from "../interface/workout.interfaces";

export class Workout implements IWorkout {
	title: string;
	reps: number;
	load: number;
	likes: number;
	_id: string;
	constructor(
		title: string,
		reps: number,
		load: number,
		likes: number,
		_id?: string
	) {
		this.title = title;
		this.reps = reps;
		this.load = load;
		this.likes = likes;
		this._id = _id ? _id : '';
	}
}
