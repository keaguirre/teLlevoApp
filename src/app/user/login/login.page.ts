import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, MenuController, NavController, ToastController } from '@ionic/angular';
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

  //Model
  user : any = {
    nombre: '',
    password : ''
  }

  field: string = '';
  username: string = '';

  constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController, private navCrtl: NavController, private menu: MenuController,private toastCtrl: ToastController,private router: Router) {
  this.menu.enable(false);}/*this.menu.enable(false); desactiva el SideMenu en esta pagina*/


    ionViewDidEnter(){
      this.menu.enable(false);/*this.menu.enable(false); desactiva el SideMenu en esta pagina (cuando se vuelve a entrar)*/
    }
     ngOnInit(): void {
      
      this.cargarLoading('<img src="../../../assets/duocLogo/fondo-transparente.png">');
      console.log('OnInit');
    }

    login(){
      if(this.validateModel(this.user)){
        this.presentAlert('Bienvenido ' + this.user.nombre);
        this.username = this.user.nombre;
        this.router.navigate(['inicio']);
      }
      else{
        this.presentToast('Datos no validos');
      }
    }

    validateModel(model: any){
      for(var[key,value] of Object.entries(model)){
        if(this.user.nombre == 'ADMIN' || this.user.nombre == 'USER' && this.user.password == '123')/*el nombre debe ser ADMIN o USER y la contraseña debe ser 123*/
        {
          this.field = key;
          return true;
        }
      }
      return false;
    }
  
    cargarLoading(mensaje: string){
      this.presentLoading(mensaje);
      setTimeout(() => {
        this.loading.dismiss();
      }, 2000);
    }
  
    async presentAlert(message: string) {
      const alert =await this.alertCtrl.create({
        header: 'Bienvenido',
        message:message,
        cssClass: 'custom-alert',
        
        buttons: [
          {
            text: 'Gracias!',
            cssClass: 'alert-button-confirm',
          },
        ],
      });
      alert.present();
    }

    async presentToast(message: string, duration?: number){
      const toast = await this.toastCtrl.create({
        message:message,
        duration:duration?duration:2000
      });
      toast.present();
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

  
