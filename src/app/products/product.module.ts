import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { AuthGuard } from '../user/auth.guard';
import { ProductEditGuard } from './product-edit/product-edit.guard';

@NgModule({
  imports: [
	SharedModule,
	RouterModule.forChild([
		{ 
			path: 'products', data: { pageTitle: "Products List" },
			canActivate: [ AuthGuard ],
			children: [
				{ path: '', component: ProductListComponent },
				{ path: ':id', component: ProductDetailComponent, resolve: { resolvedData: ProductResolver }},
				{ 
					path: ':id/edit', component: ProductEditComponent, resolve: { resolvedData: ProductResolver },  canDeactivate: [ ProductEditGuard ],
					children: [
						{ path: '', redirectTo: 'info', pathMatch: 'full' },
						{ path: 'info', component: ProductEditInfoComponent },
						{ path: 'tags', component: ProductEditTagsComponent },
					]
				}
			]
		},
	])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent	
  ]
})
export class ProductModule { }
