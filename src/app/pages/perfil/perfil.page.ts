import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})


export class PerfilPage implements OnInit {
  editProfile: any;
  autos: any;
  conductores: any;
  pasajeros: any;
  viajes: any;
  ngOnInit() {
  }
  constructor(private adminServ:AdminUsuariosService, private loadingCtrl:LoadingController) {
   }
}
