import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajarConductorPageRoutingModule } from './viajar-conductor-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViajarConductorPage } from './viajar-conductor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViajarConductorPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ViajarConductorPage]
})
export class ViajarConductorPageModule {}
