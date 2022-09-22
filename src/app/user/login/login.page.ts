import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pageTitle = 'home';
  isNotHome = false;
  loading : HTMLIonLoadingElement;
  
  constructor(private loadingCtrl: LoadingController, private navCrtl: NavController, private menu: MenuController) {
     this.menu.enable(false); }

     ngOnInit(): void {    
      this.cargarLoading('<img src="../../../assets/duocLogo/fondo-transparente.png">');
      console.log('OnInit');
    }
  
    cargarLoading(mensaje: string){
      this.presentLoading(mensaje);
      setTimeout(() => {
        this.loading.dismiss();
      }, 2000);
    }
  
    // async presentLoading(message: string) {
    //   this.loading = await this.loadingCtrl.create({
    //     message,
    //   });
  
    //   await this.loading.present();
    // }


     async presentLoading(message: string) {
       this.loading = await this.loadingCtrl.create({
         message,
         spinner: 'circular',
         cssClass: 'spinner-color'
         
       });
  
       await this.loading.present();
     }
  
  }
