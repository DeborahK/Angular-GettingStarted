import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { productRouting } from './product.routing';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
  imports: [
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
