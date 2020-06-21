import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';

@NgModule({
  // elements of this module that are exported
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  // modules that stuff in this module requires
  imports: [
    BrowserModule,
    FormsModule
  ],
  // startup module for this module
  bootstrap: [AppComponent]
})
export class AppModule { }
