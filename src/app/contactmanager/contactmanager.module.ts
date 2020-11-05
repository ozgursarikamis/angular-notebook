import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactmanagerAppComponent } from './contactmanager-app.component';

const routes: Routes = [
	{ path: '', component: ContactmanagerAppComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		RouterModule.forChild(routes)
	],
	exports: [],
	declarations: [
		ContactmanagerAppComponent,
		ToolbarComponent,
		SideNavComponent,
		MainContentComponent
	],
	providers: [],
})
export class ContactManagerModule { }
