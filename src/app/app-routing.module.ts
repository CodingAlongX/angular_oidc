import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProtectedComponent} from "./protected/protected.component";
import {AutoLoginAllRoutesGuard} from "angular-auth-oidc-client";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:"", pathMatch:"full", redirectTo:"home"
  },
  {
    path:"home", component:HomeComponent
  },
  {
    path:"protected", component: ProtectedComponent, canActivate: [AutoLoginAllRoutesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
