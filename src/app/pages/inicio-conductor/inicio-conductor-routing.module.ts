import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioConductorPage } from './inicio-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: InicioConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioConductorPageRoutingModule {}
