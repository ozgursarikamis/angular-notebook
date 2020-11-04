import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './selective-strategy.service';
import { AuthGuard } from './user/auth.guard';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: 'welcome', component: WelcomeComponent, data: [{ pageTitle: "Welcome to APM" }] },
			{ 
				path: 'products', 
				canActivate: [AuthGuard], 
				loadChildren: () => import('./products/product.module')
										.then(m => m.ProductModule) ,
				data: { preload: false }
			},
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', component: PageNotFoundComponent },
		], { preloadingStrategy: SelectiveStrategy })
	],
	exports: [
		RouterModule // app.module components / directives should access RouterModule
	]
})
export class AppRoutingModule { }