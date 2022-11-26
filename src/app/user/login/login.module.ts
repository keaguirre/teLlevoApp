import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminUsuariosService } from '../../services/adminUsuarios/admin-usuarios.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, AdminUsuariosService],
  declarations: [LoginPage]
})
export class LoginPageModule {}
