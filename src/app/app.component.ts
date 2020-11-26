import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  private json = 'assets/data/test.json';

  constructor(private http: HttpClient) {
	  this.getJson().subscribe(console.log);
  }

  getJson() {
	  return this.http.get(this.json);
  }
}
