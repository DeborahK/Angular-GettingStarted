// import { Component } from '@angular/core';

import { Component } from '@angular/core';
import { ProductListComponent } from "./products/product-list.component";



@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Acme Product Management"
}

// <nav class='navbar navbar-expand navbar-light bg-light'>
// <ul class='nav nav-pills'>
//     <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
//     <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
// </ul>
// </nav>
// <div class='container'>
// <router-outlet></router-outlet>
// </div>