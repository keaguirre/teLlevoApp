import { NgModule } from '@angular/core';
import { ViajeComponent } from './viaje/viaje.component';
import { IonicModule } from '@ionic/angular';
import { ClimaComponent } from './clima/clima.component';

@NgModule({
  declarations: [ViajeComponent,ClimaComponent],
  exports: [ViajeComponent,ClimaComponent],
})
export class ComponentsModule{}
