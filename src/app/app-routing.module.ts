import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{path:"login",component:LoginComponent},{path:"signin",component:SigninComponent},{path:"booking",component:BookingComponent},{path:"bookingform",component:BookingformComponent},
{path:"",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
