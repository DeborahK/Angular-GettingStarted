import { Component,OnChanges, Input,EventEmitter } from "@angular/core";
import { Output } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    startWidth:number;
    @Output() ratingClicked:EventEmitter<string>=
    new EventEmitter<string>();

    ngOnChanges():void{
        this.startWidth=this.rating*75/5;
    }

    onClick():void{
        console.log(`The rating ${this.rating} was clicked! `);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked! `);

    }
}