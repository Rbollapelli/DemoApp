import { StepperdispComponent } from './stepperdisp/stepperdisp.component';
import { StepperComponent } from './stepper/stepper.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CourselistComponent } from './courselist/courselist.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { FrommetComponent } from './frommet/frommet.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"home1",component:Home1Component},
  {path:"form",component:FrommetComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"courselist",component:CourselistComponent},
  {path:"addcourse",component:AddcourseComponent},
  {path:"stepper",component:StepperComponent},
  {path:"stepperdisp",component:StepperdispComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
