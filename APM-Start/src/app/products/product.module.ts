import { NgModule } from '@angular/core';

import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { ProductsDetailComponent } from 'src/app/products/products-detail.component';

import { ProductListComponent } from 'src/app/products/product-list.component';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
  
    ProductsDetailComponent,
  ],

  imports: [

    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'product/:id', canActivate:[ProductDetailGuard], component:ProductsDetailComponent}
     
    ]),
    SharedModule
  ] 

})
export class ProductModule { }
