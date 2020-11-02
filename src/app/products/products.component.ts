import { Observable } from 'rxjs';
import { ProductsService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductsService) { }

  products$: Observable<IProduct[]>;
  filteredPproducts$: Observable<IProduct[]>;
  filterByColor: string;

  ngOnInit(): void {
	  this.products$ = this.service.products$;
  }

  onFilterChange($event: any) {
	  this.filterByColor = $event;
	  this.performFilter();
  }
	performFilter() {
		if (this.filterByColor) {
			// this.filteredProducts =
		}
	}
}
