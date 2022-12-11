import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajarPage } from './viajar.page';

const routes: Routes = [
  {
    path: '',
    component: ViajarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajarPageRoutingModule {}
