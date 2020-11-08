import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { ProductService } from '../product.service';
import { State } from '../state/product.reducer';
import * as ProductActions from "../state/product.actions";

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	id: number;
	productDetails$: Observable<IProduct>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private service: ProductService,
		private store: Store<State>
		) {}
	

	ngOnInit(): void {
		// data from query string
		// console.log('this.route.snapshot.queryParams :>> ', this.route.snapshot.queryParams['test']);		
		this.route.paramMap.subscribe((x: ParamMap) => {
			this.id = +x.get('id');
		});

		this.productDetails$ = this.service.listProductDetails(this.id);

		this.store.dispatch(ProductActions.setCurrentProduct({ id: this.id }));
	}
}
