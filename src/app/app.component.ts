import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';

import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;
  public isMessageDisplayed: boolean;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
	return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(
	  private authService: AuthService,
	  private router: Router,
	  private messageService: MessageService
	  ) { 
		router.events.subscribe((routerEvent: Event) => {
			this.checkRouterEvent(routerEvent);
		  });
	  }

	checkRouterEvent(routerEvent: any) {
		if (routerEvent instanceof NavigationStart) {
			this.loading = true;
		}

		if (
			routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationCancel ||
			routerEvent instanceof NavigationError
		) {
			this.loading = false;
		}
	}

  logOut(): void {
    this.authService.logout();
	console.log('Log out');
	this.router.navigateByUrl('/welcome');
  }

  displayMessages(): void {
	  this.router.navigate([{ outlets: { popup: ['messages'] } }]);
	  this.messageService.isDisplayed = true;
	  this.isMessageDisplayed = true;
  }

  hideMessage(): void {
	this.router.navigate([{ outlets: { popup: null } }]);
	this.messageService.isDisplayed = false;
	this.isMessageDisplayed = false;
  }
}