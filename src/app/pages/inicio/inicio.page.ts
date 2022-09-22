import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loading : HTMLIonLoadingElement;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.presentAlert();
  }
  
  async presentAlert() {
    const alert =await this.alertCtrl.create({
      header: 'Bienvenido',
      cssClass: 'custom-alert',
      message: 'Bienvenido @tuNombre',
      buttons: [
        {
          text: 'Gracias!',
          cssClass: 'alert-button-confirm',
        },
      ],
    });
    await alert.present();
  }
}
