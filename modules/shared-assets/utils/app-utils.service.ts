import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class AppUtilsService {

	setUserColors(colors: any) {
		for (const key in colors) {
			const cssVarName = '--' + key;
			const cssVarValue = colors[`${key}`];
			document.documentElement.style.setProperty(cssVarName, cssVarValue);
		}
	}
}
