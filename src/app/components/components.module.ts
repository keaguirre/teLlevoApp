import { NgModule } from '@angular/core';
import { ViajeComponent } from './viaje/viaje.component';
import { IonicModule } from '@ionic/angular';
import { ClimaComponent } from './clima/clima.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule,CommonModule],//agrege el importe de ionic para que dejaran de tirar error los templates de componentes, tambien agrege CommonModule para poder ocupar el *ngIf necesario
  declarations: [ViajeComponent,ClimaComponent],
  exports: [ViajeComponent,ClimaComponent,IonicModule],
})
export class ComponentsModule{}
