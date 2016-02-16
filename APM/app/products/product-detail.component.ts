import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {IProduct} from './product';
import {ProductService} from './product.service';
import {StarComponent} from "../shared/star.component";

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    styleUrls: ['app/products/product-detail.component.css'],
    directives: [ROUTER_DIRECTIVES, StarComponent]
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: string;

    constructor(private _productService: ProductService,
                private _routeParams: RouteParams) {
    }

    ngOnInit() { 
        let id = parseInt(this._routeParams.get('id'),10);
        this.getProduct(id); 
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error);
    }

    convertToDate(dateString): Date {
        return new Date(dateString);
    }

}