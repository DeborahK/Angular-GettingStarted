import { Component } from "@angular/core";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'pm-root',
    template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/about'>About</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
