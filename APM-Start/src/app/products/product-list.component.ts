import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

import {Subscription} from 'rxjs'
@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit ,OnDestroy {

  constructor(private productService: ProductService) { }
  pageTitle: string = 'Product list!';
  imageWidth = 50;
  imageMargin = 2;
  errorMessage: string = '';
  showImage: boolean = false;
  products: IProduct[] = []
  filteredProducts: IProduct[] = [];
  sub! :Subscription;
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  ngOnDestroy(): void {
this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.listFilter = 'cart'
  this.sub=  this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }
  toggleImage(): void {
    this.showImage = !this.showImage;

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'product list: ' + message;
  }
}
