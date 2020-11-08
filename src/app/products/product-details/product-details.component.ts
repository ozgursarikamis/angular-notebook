import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	id: number | string;

	constructor(private router: Router,
		private route: ActivatedRoute) {}
	

	ngOnInit(): void {
		// data from query string
		console.log('this.route.snapshot.queryParams :>> ', this.route.snapshot.queryParams['test']);
		
		this.route.paramMap.subscribe((x: ParamMap) => {
			this.id = +x.get('id');
		});
	}
}
