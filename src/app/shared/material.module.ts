import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";

@NgModule({
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCheckboxModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule
	],
	declarations: [],
	providers: [],
})
export class MaterialModule { }
