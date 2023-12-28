import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { IAlert } from '../util/general.interface';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private _alerts: WritableSignal<IAlert[]> = signal([]);
	alerts = computed(() => this._alerts());

	showAlert(newAlert: IAlert) {
		this._alerts.set([newAlert]);
		setTimeout(() => this.clearAlerts(), 900);
	}

	clearAlerts() {
		this._alerts.set([]);
	}
}
