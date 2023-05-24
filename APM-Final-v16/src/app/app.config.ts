import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './products/product.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, ProductModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes) 
  ]
};
