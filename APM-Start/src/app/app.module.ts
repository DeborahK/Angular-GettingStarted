import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailComponent } from './products/products-detail.component';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import {RouterModule} from '@angular/router'; 
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductsDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {path:'product/:id', canActivate:[ProductDetailGuard], component:ProductsDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
