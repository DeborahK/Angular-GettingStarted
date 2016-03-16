import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'in-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges() {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 86/5;
    }
    
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}