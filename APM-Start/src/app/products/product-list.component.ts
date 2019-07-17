import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

    constructor() {
        this.filteredProducts = this.products;
        this.pageTitle = 'Product List';
        this.imageMargin = 2;
        this.showImage = false;
        this.filteredProducts = this.products;
        this.listFilter = '';
    }

    pageTitle: string;
    imageMargin: number;
    showImage: boolean;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    };

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }];

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        throw new Error("Init Method not implemented.");
    };

    ngOnDestroy(): void {
        throw new Error("Destroy Method not implemented.");
    };

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    };

    onRaitingClicked(message: string): void {
        alert(message);
    };
}
