import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './core/ui/alert/alert.component';
import { FooterComponent } from './core/ui/footer/footer.component';
import { HeaderComponent } from './core/ui/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, AlertComponent]
})
export class AppComponent {
  title = 'frontend';
}
