import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ViajarPageRoutingModule } from './viajar-routing.module';

import { ViajarPage } from './viajar.page';
import { ComponentsModule } from '../../components/components.module'
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ViajarPageRoutingModule
  ],
  declarations: [ViajarPage]
})
export class ViajarPageModule {}
