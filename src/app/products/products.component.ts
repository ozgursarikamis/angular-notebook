import { interval, Observable } from 'rxjs';
import { ProductsService } from './product.service';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IProduct } from './model/product';
import { debounce, map } from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor(private service: ProductsService) { }
	
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

	console.log('this.inputElementRefs :>> ', this.inputElementRefs);
  }

  products$: Observable<IProduct[]>;
  filteredPproducts$: Observable<IProduct[]>;
  filterByColor: string;
  nameFilter: string;
  
  private _listFilter: string;
  
  public get filterList() : string {
	  return this._listFilter;
  }
  
  public set filterList(v : string) {
	  this._listFilter = v;
	  this.performFilter();
  }

  @ViewChild('filterElement') filterElementRef: ElementRef;
  @ViewChildren('filterElement, nameElement') inputElementRefs: QueryList<ElementRef>;

  ngOnInit(): void {
	  this.products$ = this.service.products$;
  }

  onFilterChange($event: any) {
	  this.filterByColor = $event;
	  this.performFilter();
  }
	performFilter() {
		if (this._listFilter) {
			this.products$ = this.service.products$.pipe(
				debounce(() => interval(2000)),
				map(products => {
					return products.filter(x => this._listFilter.indexOf(x.color) !== -1)
				})
			);
		} else {
			this.products$ = this.service.products$;
		}
	}
}
