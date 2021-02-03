import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector:"pm-star",
    templateUrl:"./star.component.html",
    styleUrls:["./star.component.css"]
})

export class StarComponent implements OnChanges {
@Input() rating:number;
starWidth: number;
@Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

ngOnChanges():void {
    this.starWidth=this.rating*75/5;
}
onClick():void {
    //Warum klappt this.rating hier?
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
}
}