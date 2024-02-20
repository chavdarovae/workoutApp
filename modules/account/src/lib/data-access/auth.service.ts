import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@nodeApp/environments';
import { Subject, first, map, switchMap, tap } from 'rxjs';
import { IAccount } from '../util/interface/account.interfaces';


export const ANONYMOS_USER: IAccount = {
	_id: "",
	email: "",
	password: ""
};

export type AuthUserAction = { type: 'login' | 'logout', data?: IAccount };

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	http = inject(HttpClient);
	router = inject(Router);
	accountApi = environment.apiUrl + '/api/users';

	private authActionSubject: Subject<AuthUserAction> = new Subject();
	authAction$ = this.authActionSubject.asObservable().pipe(
		switchMap((action: AuthUserAction) => {
			switch (action.type) {
				case 'login':
					return this.http.post<IAccount>(this.accountApi + '/login', action.data).pipe(
						map((res: any) => res.user),
						tap((user: IAccount) => {
							this._currUserSn.set(user);
							sessionStorage.setItem('currUser', JSON.stringify(user));
							this.router.navigate(['/about']);
							console.log('logged');
						}),
						first()
					);

				case 'logout':
					return this.http.get<any>(this.accountApi + '/logout').pipe(
						tap(() => {
							console.log('huhuh');

							this._currUserSn.set(ANONYMOS_USER);
							sessionStorage.removeItem('currUser');
							this.router.navigate(['/login']);
						}),
						first()
					);
			}
		})
	);

	_currUserSn: WritableSignal<IAccount> = signal(ANONYMOS_USER);
	currUser = computed(()=> this._currUserSn());

	constructor() {
		this.authAction$.subscribe();

		let userToSet: any = sessionStorage.getItem('currUser');
		if (userToSet) {
			userToSet  = JSON.parse(userToSet);
		} else {
			userToSet = ANONYMOS_USER;
			this.router.navigate(['/login']);
		}
		this._currUserSn.set(userToSet);
	}

	login(loginData: IAccount): void {
		this.authActionSubject.next({type: 'login', data: loginData});
	}

	logout(): void {
		this.authActionSubject.next({type: 'logout'});
	}
}
