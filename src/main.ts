

import { CommonModule } from '@angular/common';
import { HttpClientXsrfModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app-routes';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			CommonModule,
			BrowserModule,
			RouterModule.forRoot(APP_ROUTES),
			HttpClientXsrfModule
		),
		provideAnimations(),
		provideHttpClient(withInterceptorsFromDi())
	]
})
	.catch(err => console.error(err));