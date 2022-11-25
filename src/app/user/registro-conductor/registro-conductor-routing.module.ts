import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroConductorPage } from './registro-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroConductorPageRoutingModule {}
