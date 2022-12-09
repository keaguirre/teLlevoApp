import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PerfilConductorPageRoutingModule } from './perfil-conductor-routing.module';
import { PerfilConductorPage } from './perfil-conductor.page';
import { ComponentsModule } from '../../components/components.module'
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    HttpClientModule,
    PerfilConductorPageRoutingModule
  ],
  declarations: [PerfilConductorPage],
  providers: [AdminUsuariosService, HttpClient]
})
export class PerfilConductorPageModule {}
