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

  constructor(private productService: ProductService) {
  }

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
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this._listFilter = '';
  }
}
