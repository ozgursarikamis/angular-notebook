import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from './models/product';
import { ProductService } from './product.service';
import { getShowThumbnails, State } from './state/product.reducer';

import * as ProductActions from "./state/product.actions";

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	showThumbs: boolean;
	private products: IProduct[];

	constructor(
		private service: ProductService,
		private store: Store<State>
	) { 
		this.store.select(getShowThumbnails).subscribe(showThumbs => {
			console.log('showThumbs from state :>> ', showThumbs);
			this.showThumbs = showThumbs
		});
	}

	product$: Observable<IProduct[]>;

	ngOnInit(): void {
		this.product$ = this.service.listAllProducts();
		this.product$.subscribe(products => this.products = products);
		this.store.dispatch(ProductActions.setProducts({products: this.products }));
	}

	toggleThumb() {
		// this.showThumbs = !this.showThumbs;
		this.store.dispatch(ProductActions.toggleThumbnails());
	}
}
