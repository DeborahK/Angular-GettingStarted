import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',

  
  template: `
  <nav vlass="navbar navbar-expand navbar-light bg-light">

<a class="navbar-brand"> {{pageTitle}} </a>
<ul class="nav nav-pills">
<li><a class="nav-link" [routerLink]="['/welcome']"> Home </a></li>
<li><a class="nav-link" [routerLink]="['/products']"> Product List </a>


</ul>



</nav>
<div class="container">
<router-outlet></router-outlet>
</div>
  `
  
  
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}
