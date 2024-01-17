import { IAccount } from "../interface/account.interfaces";

export class Account implements IAccount {
	email: string;
	password: string;
	constructor(
		email: string,
		password: string,
	) {
		this.email = email;
		this.password = password;
	}
}
