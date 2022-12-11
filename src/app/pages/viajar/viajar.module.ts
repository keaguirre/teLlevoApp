import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD
import { ViajarPageRoutingModule } from './viajar-routing.module';
=======

import { ViajarPageRoutingModule } from './viajar-routing.module';

>>>>>>> 0e67e31ea64b3106ef82d06f68ad760a4a0578be
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
