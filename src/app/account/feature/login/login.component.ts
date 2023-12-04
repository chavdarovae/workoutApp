import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountService } from '../../data-access/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf, MatButtonModule]
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
