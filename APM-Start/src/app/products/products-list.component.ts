import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  pageTitle = 'Products list';
  imageWidth = 50;
  imageMargin = 2;
  showImages = true;
  listFilter = 'cart';
  products: any[] = [
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

  toggleImages() {
    this.showImages = !this.showImages;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product list: ${message}`;
  }
}
