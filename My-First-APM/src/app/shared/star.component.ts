//Step 2: import Component
import { Component, OnChanges } from '@angular/core';

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
    rating: number=4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }
}