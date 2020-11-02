import { ProductDetailsComponent } from './../product-details/product-details.component';
import { interval, Observable } from 'rxjs';
import { ProductsService } from './product.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from './model/product';
import { debounce, filter, map } from "rxjs/operators";
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(private service: ProductsService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
	console.log('Parent component changes :>> ', changes);
  }
	
  ngAfterViewInit(): void {
	//   console.log('this.filterElementRef :>> ', this.filterElementRef);
	this.filterElementRef.nativeElement.focus();
	/*
		! CONSIDERATIONS: 
		* using nativeElement, enables DIRECT access the DOM
		* which means we tightly coupled to the browser
		* we may not be able to use SSR or Web Workers
		* can pose a security threat, especially accessing the innerHTML (XSS Attacks)
	*/
	
	this.filterInput.valueChanges.subscribe(x => this.performFilter(x));

	// access child components methods and properties:
	console.log('this.childComponent.hitCount :>> ', this.childComponent.hitCount);
	console.log('this.childComponent.increaseHitCount() :>> ', this.childComponent.increaseHitCount());

  }

  products$: Observable<IProduct[]>;
  filteredPproducts$: Observable<IProduct[]>;
  filterByColor: string;
  ngModelFiltering: string;
  
  @ViewChild(ProductDetailsComponent) childComponent: ProductDetailsComponent;

  @ViewChild('filterElement') filterElementRef: ElementRef;
  
  // NgModel is to access state information, 
  // observable data flow ... etc... 
  @ViewChild(NgModel) filterInput: NgModel;

  ngOnInit(): void {
	  this.products$ = this.service.products$;
  }

  messageReceived($event: string) {
	  alert($event);
  }

  onFilterChange($event: any) {
	  this.filterByColor = $event;
	  this.performFilter(this.ngModelFiltering);
  }

  performFilter(filterTerm: string) {
		if (filterTerm) {
			this.products$ = this.service.products$.pipe(
				debounce(() => interval(2000)),
				map(products => {
					return products.filter(x => filterTerm.indexOf(x.color) !== -1)
				})
			);
		} else {
			this.products$ = this.service.products$;
		}
	}
}
