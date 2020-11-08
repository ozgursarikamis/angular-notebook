import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/page-not-found/shared.module';
import { HomeComponent } from './home/home.component';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { productReducer } from './products/state/product.reducer';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		StoreModule.forRoot({}, {}),
		StoreModule.forFeature('products', productReducer),
		StoreDevtoolsModule.instrument({
			name: 'APM Demo App Dev Tools',
			maxAge: 25,
			logOnly: environment.production
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
