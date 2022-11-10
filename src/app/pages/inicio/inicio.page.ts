import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loading : HTMLIonLoadingElement;
  user = this.route.snapshot.paramMap.get('id');


  constructor(private router: Router, private route: ActivatedRoute, private menu: MenuController, private routerOutlet: IonRouterOutlet) {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.routerOutlet.swipeGesture = false;
    //const user = this.route.snapshot.paramMap.get('id');
    //console.log(`id: ${this.user}`)
  }
}
