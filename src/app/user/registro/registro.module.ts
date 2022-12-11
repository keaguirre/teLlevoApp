import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { AdminUsuariosService } from '../../services/adminUsuarios/admin-usuarios.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistroPage],
  providers: [AdminUsuariosService, HttpClient],
})
export class RegistroPageModule {}
