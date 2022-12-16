import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViajarPageRoutingModule } from './viajar-routing.module';
import { ViajarPage } from './viajar.page';
import { ComponentsModule } from '../../components/components.module'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ViajarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ViajarPage]
})
export class ViajarPageModule {}
