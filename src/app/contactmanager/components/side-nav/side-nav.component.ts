import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
	showFiller: boolean;
	screenIsSmall: boolean;
	
	constructor(private breakpointObserver: BreakpointObserver) { }
	
	ngOnInit(): void {
		this.breakpointObserver
			//.observe([Breakpoints.XSmall])
			.observe([` (max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
			.subscribe((state: BreakpointState) => {
				console.log('state :>> ', state);
				this.screenIsSmall = state.matches;
			})
	}

}
