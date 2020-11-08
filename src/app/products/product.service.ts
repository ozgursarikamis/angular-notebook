import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from './models/product';

import { shareReplay } from "rxjs/operators";

const url = 'https://5fa55564732de900162e8ffd.mockapi.io';

@Injectable()
export class ProductService {
	constructor(private http: HttpClient) { }
	products$ = this.http.get<IProduct[]>(`${url}/products`).pipe(shareReplay());

	listAllProducts(): Observable<IProduct[]> {
		return this.products$;
	}	

	listProductDetails(id: number): Observable<IProduct> {
		return this.http.get<IProduct>(`${url}/products/${id}`);
	}
}