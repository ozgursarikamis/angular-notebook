import { Observable } from 'rxjs';
import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
	constructor(private service: ProductsService) { }

	products: IProduct[];
	productsAsync: Observable<IProduct[]>;

	ngOnInit(): void {
		this.productsAsync = this.service.listProductsWithCategories(); 
	}

	onClick() {
		this.productsAsync = this.service.listProductsWithCategories();
	}
}
