import {Component, Output, EventEmitter}  from 'angular2/core';

@Component({
    selector: 'ai-filter-entry',
    template: `
      <div class='row'>
        <div class='col-md-2'>Filter by:</div>
        <div class='col-md-4'>
            <input type='text' [(ngModel)]='filterText' (keyup)='onFilterChanged()' (input)='onFilterChanged()'/>
        </div>
      </div>
      <div class='row' [hidden]='!filterText'>
        <div class='col-md-6'>
            <h3>Filtered by: {{filterText}}</h3>
        </div>
      </div>
      <br/>
    `
})
export class FilterEntryComponent {
    filterText: string = '';
    @Output() filterChanged : EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }
    
    onFilterChanged() {
        this.filterChanged.emit(this.filterText);
    }
}