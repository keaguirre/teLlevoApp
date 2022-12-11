import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoversorPageRoutingModule } from './coversor-routing.module';

import { CoversorPage } from './coversor.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CoversorPageRoutingModule
  ],
  declarations: [CoversorPage]
})
export class CoversorPageModule {}
