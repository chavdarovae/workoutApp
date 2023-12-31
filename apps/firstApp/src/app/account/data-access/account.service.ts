import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { IAccount } from '../util/interface/account.interfaces';

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	accountApi = environment.apiUrl + '/api/users';
	_accounts$: BehaviorSubject<any> = new BehaviorSubject([]);
	accounts$: Observable<IAccount[]> = this._accounts$.asObservable();

	_refreshList$: BehaviorSubject<boolean> = new BehaviorSubject(true);

}
