import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngrx';
}

/*
A callback method that is invoked immediately
after the default change detector has checked the directive's data-bound properties for the first time,
and before any of the view or content children have been checked.
It is invoked only once when the directive is instantiated.
*/
