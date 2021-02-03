import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div> 
  <h2> Hallo </h2>
  <pm-products> </pm-products>
  </div>`
  
  
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
