import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/page-not-found/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
	  BrowserModule,
	  AppRoutingModule,
	  SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
