import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';


const MaterialComponents = [
	MatButtonModule,
	MatInputModule,
	MatTableModule,
	MatFormFieldModule,
	MatCheckboxModule,
	MatDividerModule,
	MatCardModule,
	MatProgressBarModule,
	MatIconModule
];

@NgModule({
	declarations: [],
	imports: [...MaterialComponents],
	exports: [...MaterialComponents]
})
export class AngularMaterialModule { }
