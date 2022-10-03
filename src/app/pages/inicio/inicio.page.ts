import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loading : HTMLIonLoadingElement;
  constructor(private menu: MenuController,private routerOutlet: IonRouterOutlet) {this.menu.enable(true);}

  ngOnInit() {
    this.routerOutlet.swipeGesture = false;
  }
  
}
