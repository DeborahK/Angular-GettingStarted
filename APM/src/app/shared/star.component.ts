import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html',
    
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter <string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}