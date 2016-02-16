import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IProduct} from './product';
import {ProductService} from './product.service';
//import {MovieFilterPipe} from './movieFilter.pipe';
import {StarComponent} from "../shared/star.component";

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    directives: [ROUTER_DIRECTIVES, StarComponent]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    showImage: boolean = false;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }

    ngOnInit() {this.getproducts();}

    getproducts() {
           this._productService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error); 
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    convertToDate(dateString): Date {
        return new Date(dateString);
    }
}