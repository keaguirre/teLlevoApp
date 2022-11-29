import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
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
    PerfilPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PerfilPage],
  providers: [AdminUsuariosService, HttpClient]
})
export class PerfilPageModule {}
