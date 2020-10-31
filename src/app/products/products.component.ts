import { Subscription } from 'rxjs';
import { IProduct } from './models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

	productsSubscription: Subscription;
	constructor(private service: ProductsService) { }

	products: IProduct[];

	ngOnInit(): void {
		this.productsSubscription = this.service.listProductsWithCategories()
			.subscribe((products: IProduct[]) => {
				this.products = products;
			});
	}

	ngOnDestroy(): void {
		this.productsSubscription.unsubscribe();
	}
}
