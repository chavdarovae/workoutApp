import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { accountRoutes } from './account.routing';
import { LoginComponent } from './login/login.component';



@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(accountRoutes),
		AngularMaterialModule
	]
})
export class AccountModule {}
