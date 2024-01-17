import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
