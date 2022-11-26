import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
import { ComponentsModule } from '../../components/components.module'
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PerfilPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PerfilPage],
  providers: [AdminUsuariosService, HttpClient]
})
export class PerfilPageModule {}
