import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-route.module';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
	  ProductsRoutingModule,
	  HttpClientModule,
	  CommonModule
  ],
  providers: [
	  ProductService
  ]
})
export class ProductsModule { }
