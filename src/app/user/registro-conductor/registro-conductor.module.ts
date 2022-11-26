import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroConductorPageRoutingModule } from './registro-conductor-routing.module';
import { RegistroConductorPage } from './registro-conductor.page';
import { AdminUsuariosService } from '../../services/adminUsuarios/admin-usuarios.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroConductorPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RegistroConductorPage],
  providers: [AdminUsuariosService, HttpClient]
})
export class RegistroConductorPageModule {}
