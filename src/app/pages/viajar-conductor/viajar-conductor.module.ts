import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajarConductorPageRoutingModule } from './viajar-conductor-routing.module';

import { ViajarConductorPage } from './viajar-conductor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ViajarConductorPageRoutingModule
  ],
  declarations: [ViajarConductorPage]
})
export class ViajarConductorPageModule {}
