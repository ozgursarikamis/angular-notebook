import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: 'welcome', component: WelcomeComponent, data: [{ pageTitle: "Welcome to APM" }] },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent },
		], { enableTracing: true })
	],
	exports: [
		RouterModule // app.module components / directives should access RouterModule
	]
})
export class AppRoutingModule { }