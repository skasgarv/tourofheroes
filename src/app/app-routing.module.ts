import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "/heroList",
    pathMatch: "full"
  },
  {
    path: "viewDetails/:id",
    component: ViewDetailsComponent
  },
  {
    path: "heroList",
    component: HeroListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
