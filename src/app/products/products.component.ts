import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from './models/product';
import { ProductService } from './product.service';
import { State } from './state/product.reducer';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	showThumbs: boolean;

	constructor(
		private service: ProductService,
		private store: Store<State>
	) { }

	product$: Observable<IProduct[]>;

	ngOnInit(): void {
		this.product$ = this.service.listAllProducts();
		this.store.select('products').subscribe(products => {
			console.log('products :>> ', products);
			if (products) {
				this.showThumbs = products.showThumbnail;
			}
		});
	}

	toggleThumb() {
		this.showThumbs = !this.showThumbs;
	}

}
