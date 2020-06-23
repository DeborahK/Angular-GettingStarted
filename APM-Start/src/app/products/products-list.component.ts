import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

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
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
  }

  pageTitle = 'Products list';
  imageWidth = 50;
  imageMargin = 2;
  showImages = true;

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];
  /**
   *
   */
  constructor() {
    this.filteredProducts = this.products;
    this._listFilter = '';
  }

  toggleImages() {
    this.showImages = !this.showImages;
  }

  performFilter(filterBy: string): IProduct[] {
    const filter = filterBy.toLocaleLowerCase();
    return this.products.filter(e => e.productName.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
