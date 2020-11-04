import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductResolved> {
	constructor(private service: ProductService) { }
	
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
		const id = route.paramMap.get('id');
		if (isNaN(+id)) {
			const message = `Product id was not a number ${id}`;
			console.error(message);
			// return; // return false, return null, navigate to error page
			return of({ product: null, error: message }); //ProductResolved
		}

		return this.service.getProduct(+id)
			.pipe(
				map(product => ({ product })),
				catchError(err => {
					const message = `Retrieval error: ${err}`;
					console.error(message);
					return of({ product: null, error: message })
				})
			)

	}
}