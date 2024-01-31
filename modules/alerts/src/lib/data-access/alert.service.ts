import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Alert } from '../util/alert.model';
import { IAlert } from '../util/general.interface';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private _alerts: WritableSignal<IAlert[]> = signal([]);
	alerts = computed(() => this._alerts());

	showAlert(msg: string, type: 'danger' | 'success' | 'warn') {
		this._alerts.set([new Alert(msg, type)]);
		setTimeout(() => this.clearAlerts(), 900);
	}

	clearAlerts() {
		this._alerts.set([]);
	}
}
