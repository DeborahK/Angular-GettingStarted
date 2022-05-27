import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    'selector':'product-list',
    'templateUrl':'./product-list.component.html',
    'styleUrls': ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{

    constructor(private productService: ProductService){}

    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = 'Product List';
    showImages: boolean = false
    products: Product[] = [];
    filteredProducts: Product[] = [];

    private _listFiler: string = '';
    get listFiler(): string{
        return this._listFiler;
    } 
    set listFilter(value: string){
        this._listFiler = value;
        this.filteredProducts = this.performFilter(value);
    }

    performFilter(filterBy: string): Product[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().includes(filterBy))
    }

    onRatingClicked(message: string): void{
      this.pageTitle = 'Product List: ' + message;
    }
    
    toggleImages(): void {
        this.showImages = !this.showImages;
    } 

    ngOnInit(): void{
        this.listFilter = '';
        this.products = this.productService.getProducts()
        this.filteredProducts = this.products
    }

}