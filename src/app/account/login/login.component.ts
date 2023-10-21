import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from './../account.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	@Input() error!: string | null;
	@Output() submitEM = new EventEmitter();

	form: FormGroup = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(private accountService: AccountService) {}

	submit() {
		if (this.form.valid) {
			this.submitEM.emit(this.form.value);
		}

		this.accountService.login(this.form.value).subscribe();
	}

}
