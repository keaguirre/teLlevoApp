import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoversorPage } from './coversor.page';

const routes: Routes = [
  {
    path: '',
    component: CoversorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoversorPageRoutingModule {}
