import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductService) { }

  product$: Observable<IProduct[]>;

  ngOnInit(): void {
	  this.product$ = this.service.listAllProducts();
   }

}
