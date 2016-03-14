import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';

import { FilterEntryComponent } from '../shared/filter-entry.component';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    directives: [ROUTER_DIRECTIVES, 
                FilterEntryComponent,
                StarComponent],
    pipes: [ProductFilterPipe]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    listFilter: string = "";
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

    convertToDate(dateString: string): Date {
        return new Date(dateString);
    }
    
    onFilterChanged(filter: string) {
        this.listFilter = filter;
    }
}