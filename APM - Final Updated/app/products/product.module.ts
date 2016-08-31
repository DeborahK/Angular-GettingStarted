import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { productRouting } from './product.routing';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    productRouting
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {}
