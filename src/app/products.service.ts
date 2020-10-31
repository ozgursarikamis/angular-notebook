import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/models/product';

const service = 'https://5f51071d5e98480016123523.mockapi.io'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  listProducts(): Observable<IProduct[]> {
	  return this.http.get<IProduct[]>(`${service}/products`);
  }
}
