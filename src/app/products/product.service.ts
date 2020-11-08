import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from './models/product';

const url = 'https://5fa55564732de900162e8ffd.mockapi.io';

@Injectable()
export class ProductService {
	constructor(private http: HttpClient) { }

	listAllProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(`${url}/products`);
	}	
}