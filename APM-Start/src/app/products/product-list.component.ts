import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './product.service';
//import { EPROTONOSUPPORT } from 'constants';

@Component( {
    selector: 'pm-products',
    templateUrl: './product-list.component.html'    ,
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMEssage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[];
    products: IProduct [] = [];

    constructor(private productService: ProductsService) {
        
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
    
    performFilter(filterBy: string): IProduct [] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMEssage = <any>error
        );
        
    }   
    
}