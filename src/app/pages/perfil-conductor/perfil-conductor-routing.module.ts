import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilConductorPage } from './perfil-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilConductorPageRoutingModule {}
