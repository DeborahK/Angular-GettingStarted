import { Component, OnDestroy, OnInit, computed, signal } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { StarComponent } from "../shared/star.component";
import { RouterLink } from "@angular/router";
import { NgIf, NgFor, LowerCasePipe, CurrencyPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf, NgFor, 
      RouterLink, StarComponent, LowerCasePipe, 
      CurrencyPipe, ConvertToSpacesPipe]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  // Use the new Angular signals feature to perform the filter
  listFilter = signal('');
  filteredProducts = computed(() => this.performFilter(this.listFilter()));
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onFilterChange(value: string) {
    this.listFilter.set(value);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
