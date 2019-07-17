import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() raiting: number;
    @Output() raitingClicked: EventEmitter<string>; //= new EventEmitter<string>();
    divSize: number = 75;

    constructor(){
        this.raitingClicked = new EventEmitter<string>();
    }

    ngOnChanges(): void {
        this.starWidth = this.raiting * this.divSize / 5;
    };

    onClick() {
        this.raitingClicked.emit( `The raitin ${this.raiting} was clicked.`);
    };
}