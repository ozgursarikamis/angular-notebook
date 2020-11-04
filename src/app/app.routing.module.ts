import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: 'welcome', component: WelcomeComponent, data: [{ pageTitle: "Welcome to APM" }] },
			{ path: 'products', canLoad: [AuthGuard], loadChildren: () => import('./products/product.module').then(m => m.ProductModule) },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent },
		])
	],
	exports: [
		RouterModule // app.module components / directives should access RouterModule
	]
})
export class AppRoutingModule { }