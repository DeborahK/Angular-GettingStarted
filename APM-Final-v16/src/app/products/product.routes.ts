import { Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { ProductListComponent } from "./product-list.component";

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: ':id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }];