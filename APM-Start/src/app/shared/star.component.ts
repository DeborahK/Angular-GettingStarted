import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number;  // input decorator allows catching data from templates
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();  // Data is emitted using events

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  // Handler emits events to any components that are listening to this one
  // (parent components that are using this component as a child, i.e. in a directive)
  onClick(): void {
      this.ratingClicked.emit(`Rating ${this.rating} was clicked!`);
  }
}
