import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from 'src/app/home/welcome.component';
import {RouterModule} from '@angular/router'; 
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';
import { ProductModule } from 'src/app/products/product.module';

@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
  
    HttpClientModule ,
    RouterModule.forRoot([
       {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}
    ]),
      ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
