import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajarConductorPage } from './viajar-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ViajarConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajarConductorPageRoutingModule {}
