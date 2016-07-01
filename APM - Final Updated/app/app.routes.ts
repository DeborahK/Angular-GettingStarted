import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { ProductRoutes }        from './products/product.routes';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  ...ProductRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
