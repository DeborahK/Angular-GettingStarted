import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
    imports: [
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        {
            path: 'products/:id',
            canActivate: [ProductDetailGuard],
            component: ProductDetailComponent
        }
    ]),
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
]
})
export class ProductModule { }
