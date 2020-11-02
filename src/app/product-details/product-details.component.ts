import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

	@Input() showDetails: boolean;
	@Input() hitCount: number;
	hitMessage: string;

	@Output() messageToParent = new EventEmitter<string>();

	constructor() { }

	sendMessageToParent() {
		this.messageToParent.emit("Hello parent!");
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["hitCount"] && !changes["hitCount"].currentValue) {
			this.hitMessage = "No matches found";
		} else {
			this.hitMessage = "Hits: " + this.hitCount;
		}
		console.log('changes :>> ', changes);
	}

	increaseHitCount(): number {
		return this.hitCount + 1;
	}

	ngOnInit(): void {
	}

}
