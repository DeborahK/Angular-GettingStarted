import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

export const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id',
    canActivate: [ ProductDetailGuard],
    component: ProductDetailComponent }
];

export const productRoutingModule: ModuleWithProviders =
                      RouterModule.forChild(productRoutes);
