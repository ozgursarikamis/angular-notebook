import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { IColor, IProduct } from './model/product';

const service: string = "https://5f51071d5e98480016123523.mockapi.io";
@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	constructor(private http: HttpClient) {}

	products$ = this.http.get<IProduct[]>(`${service}/products`).pipe(shareReplay(1));
	listProducts() {
		return this.products$;
	}

	colors$ = this.http.get<IColor[]>(`${service}/colors`);
	listColors() {
		return this.colors$;
	}
}
