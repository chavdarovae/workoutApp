import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { IAlert } from '../util/general.interface';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	private _alerts: WritableSignal<IAlert[]> = signal([{msg: 'pass auf!' , type: 'danger' }]);
	alerts = computed(() => this._alerts());

	showAlert(newAlert: IAlert) {
		// this._alerts.update(alerts => alerts.push(newAlert));
	}
}
