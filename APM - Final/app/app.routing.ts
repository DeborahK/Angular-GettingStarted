import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

export const appRoutingModule: ModuleWithProviders =
                      RouterModule.forRoot(appRoutes);
