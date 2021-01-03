import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './abstract/base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  constructor() {
    super();
    console.log(this.title);
  }
}
