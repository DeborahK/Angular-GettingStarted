import { Component, OnInit, Pipe } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListCommponent
    implements OnInit
{
    pageTitle: string = 'Product List';
    showImage: boolean = false;    
    imageWidth: number = 100;
    imageMargin: number = 10;
    private _productService;

    _listFilter: string;
    errorMessage: any;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService: ProductService) {
    }

    toggleImage():void{
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        )

    }
    performFilter(filterBy: string): IProduct[] {        
        filterBy = filterBy.toLocaleLowerCase();        
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);    
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}

