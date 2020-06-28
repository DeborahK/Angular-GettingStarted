import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './products.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  pageTitle = 'Products list';
  imageWidth = 50;
  imageMargin = 2;
  showImages = true;
  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) {}

  toggleImages() {
    this.showImages = !this.showImages;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product list: ${message}`;
  }

  performFilter(filterBy: string): IProduct[] {
    const filter = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (e) => e.productName.toLocaleLowerCase().indexOf(filter) !== -1
    );
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      // httpRequest doesn't start until subscribe is called
      // subscribe needs an observer or an object that conforms to that interface
      // which is a fancy way of saying it needs something to handle the data stream
      .subscribe({
        next: (response) => {
          this.products = response;
          this.filteredProducts = this.products;
          this.listFilter = '';
        },
        error: (err) => console.log(err),
      });
    this.filteredProducts = this.products;
    this._listFilter = '';
  }
}
