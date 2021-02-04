import { ProductDetailGuard } from './products/product-detail.guard';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from "./products/product-list.component"

import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import {RouterModule} from "@angular/router";
import { ProductModule } from './products/product.module'

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    RouterModule.forRoot([
    
      {path:"welcome", component:WelcomeComponent},
      {path:"", redirectTo:"welcome", pathMatch:"full"},
      {path:"**", redirectTo:"welcome", pathMatch:"full"}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
