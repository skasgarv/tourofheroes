import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component"
const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
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
