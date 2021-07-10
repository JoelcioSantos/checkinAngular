import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { GuestAccommodationControllComponent } from './guest-accommodation-controll/guest-accommodation-controll.component';
import { GuestControllComponent } from './guest-controll/guest-controll.component';

const routes: Routes = [
  {
    path:"",
    component: MainComponent
  },
  {
    path: "guest-acomodation-controll",
    component: GuestAccommodationControllComponent
  },
  {
    path: "guest-controll",
    component: GuestControllComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
