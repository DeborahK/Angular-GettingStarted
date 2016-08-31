import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { productRoutingModule } from './product.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    productRoutingModule
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
