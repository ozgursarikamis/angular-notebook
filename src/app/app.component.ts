import { Component } from '@angular/core';
import * as test from "../assets/data/test.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  constructor() {
	  console.log('test :>> ', (test as any).default);
  }
}
