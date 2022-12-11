import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginConductorPage } from './login-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginConductorPageRoutingModule {}
