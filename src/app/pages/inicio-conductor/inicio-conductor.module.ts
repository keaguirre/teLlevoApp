import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioConductorPageRoutingModule } from './inicio-conductor-routing.module';

import { InicioConductorPage } from './inicio-conductor.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InicioConductorPageRoutingModule
  ],
  declarations: [InicioConductorPage]
})
export class InicioConductorPageModule {}
