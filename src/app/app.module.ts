import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		HttpClientModule,
		HttpClientXsrfModule,
		AccountModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
