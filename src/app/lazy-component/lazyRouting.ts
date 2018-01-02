import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponentComponent }   from "./lazy-component.component";
import { LazyChildComponent } from './lazy-child/lazy-child.component';

const routes: Routes = [
  { path: '', component: LazyComponentComponent },
  { path: 'child', loadChildren:'./lazy-child/lazyChild.module#LazyModule1'}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
