import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
	showFiller: boolean;
	screenIsSmall: boolean;
	users: Observable<User[]>;
	
	constructor(
		private breakpointObserver: BreakpointObserver,
		private service: UserService
		) { }
	
	ngOnInit(): void {
		this.breakpointObserver
			//.observe([Breakpoints.XSmall])
			.observe([` (max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
			.subscribe((state: BreakpointState) => {
				console.log('state :>> ', state);
				this.screenIsSmall = state.matches;
			});

			this.users = this.service.users;
 			this.service.listAllUsers();

			this.users.subscribe(data => {
				console.log(data);
			});
	}

}
