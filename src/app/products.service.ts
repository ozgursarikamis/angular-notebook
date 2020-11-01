import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, combineLatest, of } from 'rxjs';

import { concatMap, map, shareReplay, tap } from "rxjs/operators";
import { ICategory, IProduct } from './products/models/product';

const service = 'https://5f51071d5e98480016123523.mockapi.io'

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(private http: HttpClient) {
		this.listProductWithConcatMap$.subscribe(console.log);
	 }

	products$ = this.http.get<IProduct[]>(`${service}/products`).pipe(shareReplay(1));
	categories$ = this.http.get<ICategory[]>(`${service}/categories`).pipe(shareReplay(1));

	productsWithCategories$ = combineLatest([this.products$, this.categories$])
		.pipe();

	listProductWithMap$ = of(1,2,3).pipe(
			map(id => this.http.get<IProduct>(`${service}/products/${id}`))
		);

	listProductWithConcatMap$ = of(1,2,3).pipe(
			tap(x => console.log(`concatMap value is : ${x}`)),
			concatMap(id => this.http.get<IProduct>(`${service}/products/${id}`))
		);

	listProducts(): Observable<IProduct[]> {
		return this.products$
			.pipe(
				map(products => {
					let i = 1;
					products.forEach(product => {
						if (!product.categoryId) {
							product.categoryId = i;
						}
					})
					return products;
				})
			);
	}

	listCategories(): Observable<ICategory[]> {
		return this.categories$;
	}

	listProductsWithCategories() {
		return this.productsWithCategories$.pipe(
			map(([products, categories]) => {
				let i = 1;
				products.forEach(p => {
					if (!p.categoryId) {
						p.categoryId = i;
						i++;
					}
				})
				return products.map(product => ({
					...product,
					categoryName: categories.find(x => +x.id === product.categoryId).name
				}) as IProduct)
			})
		);
	}
}
