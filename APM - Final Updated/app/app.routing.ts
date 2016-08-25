import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
