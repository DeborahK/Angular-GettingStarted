import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/products', component: ProductListComponent },
    { path: '/product/:id', component: ProductDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
