import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate:[ProductsDetailGuard]  ,component: ProductsDetailComponent    }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
