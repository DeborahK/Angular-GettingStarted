import { Component, Input, OnChanges } from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starPercent: string;
    
    ngOnChanges() {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starPercent = (this.rating * 86/5) + "px";
    }    
}