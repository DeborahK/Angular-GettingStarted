import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  // elements of this module that are exported
  declarations: [
    AppComponent,
    ProductsListComponent,
    ConvertToSpacesPipe
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
