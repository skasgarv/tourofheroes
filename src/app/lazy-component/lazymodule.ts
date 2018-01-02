import { NgModule } from '@angular/core';

import { LazyComponentComponent }   from "./lazy-component.component";
import { routing } from "./lazyRouting";

@NgModule({
  imports: [routing],
  declarations: [LazyComponentComponent]
})
export class LazyModule {}
