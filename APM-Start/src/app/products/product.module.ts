import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component'
import {MatSliderModule} from "@angular/material/slider"
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces,
  
  ],
  imports: [
    MatSliderModule,
  
    RouterModule.forChild([
      {path:"products", component: ProductListComponent},
      {path:"products/:id",
      canActivate: [ProductDetailGuard],
      component:ProductDetailComponent},

    ]),
    SharedModule
  ]
})
export class ProductModule { }
