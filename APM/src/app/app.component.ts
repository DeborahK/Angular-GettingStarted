import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: ` <div> 
    <h1> {{pageTitle}} </h1>
    <pm-product></pm-product>
  </div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Production Management';
}