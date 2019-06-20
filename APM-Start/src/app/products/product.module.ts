import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { ProductsDetailComponent } from 'src/app/products/products-detail.component';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductsDetailComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'product/:id', canActivate:[ProductDetailGuard], component:ProductsDetailComponent}
     
    ])
  ] 

})
export class ProductModule { }
