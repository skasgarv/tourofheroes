import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyChildComponent } from './lazy-child.component';

const routes: Routes = [
  { path: '', component: LazyChildComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
