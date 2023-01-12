import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUSComponent} from "./about-us/about-us.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  //home component route
  {path:'', component:HomeComponent},
  //about us component route
  {path:'about',component:AboutUSComponent},
  // contact component route
  {path:'contact',component:ContactComponent},
  // login component route
  {path:'login',component:LoginComponent},
  //page not found route
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
