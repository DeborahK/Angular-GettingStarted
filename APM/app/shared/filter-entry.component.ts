import {Component, Output, EventEmitter}  from 'angular2/core';

@Component({
    selector: 'mh-filter-entry',
    template: `
      <div class="row">
        <div class="col-md-2">Filter by:</div>
        <div class="col-md-4">
            <input type="text" [(ngModel)]="filterText" (keyup)="onChanged()" (input)="onChanged()"/>
        </div>
      </div>
      <div class="row" [hidden]="!filterText">
        <div class="col-md-6">
            <h3>Movies filtered by: {{filterText}}</h3>
        </div>
      </div>
      <br/>
    `
})
export class FilterEntryComponent {
    filterText: string = "";
    @Output() filterChanged : EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }
    
    onChanged() {
        this.filterChanged.emit(this.filterText);
    }
}