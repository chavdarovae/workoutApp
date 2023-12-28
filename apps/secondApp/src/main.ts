

import { CommonModule } from '@angular/common';
import { HttpClientXsrfModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SECOND_APP_ROUTES } from './app/app.routes';


bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			CommonModule,
			BrowserModule,
			RouterModule.forRoot(SECOND_APP_ROUTES, { anchorScrolling: 'enabled', scrollPositionRestoration: 'disabled', onSameUrlNavigation: 'reload', useHash: true }),
			HttpClientXsrfModule,
		),
		provideAnimations(),
		provideHttpClient(withInterceptorsFromDi()),
	]
})
.catch(err => console.error(err));
