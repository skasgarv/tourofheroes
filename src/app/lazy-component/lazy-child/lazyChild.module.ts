import { NgModule } from '@angular/core';

import { routing } from "./lazyChild.routing";
import { LazyChildComponent } from './lazy-child.component';

@NgModule({
  imports: [routing],
  declarations: [LazyChildComponent]
})
export class LazyModule1 {}
