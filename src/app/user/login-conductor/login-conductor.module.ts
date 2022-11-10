import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginConductorPageRoutingModule } from './login-conductor-routing.module';

import { LoginConductorPage } from './login-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginConductorPageRoutingModule
  ],
  declarations: [LoginConductorPage]
})
export class LoginConductorPageModule {}
