import { IAlert } from "./general.interface";

export class Alert implements IAlert {
	msg: string;
	type: 'danger' | 'success' | 'warn';

	constructor(
		msg: string,
		type: 'danger' | 'success' | 'warn',
	) {
		this.msg = msg;
		this.type = type;
	}
}
