import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges{

    @Input() rating: number = 4;
    
    cropWidth: number = 75;

    
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void{
        this.cropWidth = this.rating * 75/5
    }
}