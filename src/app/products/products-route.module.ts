import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/page-not-found/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';

const productRoutes: Routes = [
	{ path: '', component: ProductsComponent },
	{ path: 'details', component: ProductDetailsComponent },
	{ path: 'details/:id', component: ProductDetailsComponent }
]

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild(productRoutes)
	],
	exports: [RouterModule],
	declarations: [],
	providers: [],
})
export class ProductsRoutingModule { }
