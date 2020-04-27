//Step 2: import Component
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

//step 3: build component
@Component({
    //selector: how you'll refer to this component
    selector: 'pm-star',
    //templateUrl: the html
    templateUrl: './star.component.html',
    //styleUrls: any necessary css styles
    styleUrls: ['./star.component.css']

})


//Step 1: create class with an export statement
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`)
    }
}