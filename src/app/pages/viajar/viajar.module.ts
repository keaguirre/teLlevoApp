import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajarPageRoutingModule } from './viajar-routing.module';

import { ViajarPage } from './viajar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajarPageRoutingModule
  ],
  declarations: [ViajarPage]
})
export class ViajarPageModule {}
