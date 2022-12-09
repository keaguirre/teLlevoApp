import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajar-conductor',
  templateUrl: './viajar-conductor.page.html',
  styleUrls: ['./viajar-conductor.page.scss'],
})
export class ViajarConductorPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  
  async presentAlert() { //Alerta para ofertar precio
    const alert = await this.alertController.create({
      header: 'Oferta un precio para el viaje',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ofertar',
          role: 'confirm',
        },
      ],
      inputs: [
        {
          placeholder: 'Precio',
        },
      ],
    });

    await alert.present();
  }


}
