import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCheckboxModule,
		MatIconModule
	],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
