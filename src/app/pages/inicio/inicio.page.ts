import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loading : HTMLIonLoadingElement;
  user = this.route.snapshot.paramMap.get('id');

  usr:any;
  loadedUser:any;
  currentUser:any;
  

  constructor(private adminServ: AdminUsuariosService, private router: Router, private route: ActivatedRoute, private menu: MenuController, private routerOutlet: IonRouterOutlet) {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.routerOutlet.swipeGesture = false;
    this.onLoadUsr();
  }
  onLoadUsr(){
    this.usr = localStorage.getItem("logged-usr");
    this.loadedUser = this.adminServ.obtenerPasajeroLogin(this.usr).then(respuesta => {
    this.currentUser = respuesta;
    });
  }
}
