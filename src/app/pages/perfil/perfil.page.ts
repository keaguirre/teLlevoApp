import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar/avatar.service';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';

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
  user: any;
  loadedUser: any;
  updateInfoUser :FormGroup;
  pasajero: any;
  presentingElement = undefined;
  profile: any = null;

  constructor(private adminServ:AdminUsuariosService,
    private loadingCtrl:LoadingController,
    private formBuilder:FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl:AlertController,
    private avatarService: AvatarService,
    private router: Router)
    {this.cargarAvatar();
    }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    //load usr
    //build form
    this.updateInfoUser = this.formBuilder.group({
      p_email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(32)]),
      p_name: new FormControl('', [Validators.minLength(2), Validators.maxLength(32)]),
      p_lastname: new FormControl('', [Validators.minLength(2), Validators.maxLength(32)]),
      p_password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
      p_password_confirm: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
      p_pnumber: new FormControl('',[Validators.minLength(9), Validators.maxLength(12), Validators.maxLength(32)]),
      p_image: new FormControl('',[Validators.minLength(1), Validators.maxLength(54)])
    });
    this.onLoadUsr();
    this.cargarAvatar();
  }
  onLoadUsr(){
    this.user = localStorage.getItem("logged-usr");
    this.loadedUser = this.adminServ.obtenerPasajeroLogin(this.user).then(respuesta => {
    this.pasajero = respuesta;
    this.onLoadForm();
    });
  }
  onLoadForm(){
    this.updateInfoUser.patchValue({
      p_email: this.pasajero['p_email'],
      p_name: this.pasajero['p_name'],
      p_lastname: this.pasajero['p_lastname'],
      p_password: this.pasajero['p_password'],
      p_password_confirm: this.pasajero['p_password'],
      p_pnumber: this.pasajero['p_pnumber'],
      p_image: this.pasajero['p_image'],
    })
  }

  onUpdate(){ //envia el form de update
    try{
      this.adminServ.updatePasajero(this.pasajero['p_email'],this.updateInfoUser.value);
      this.alertPresent("Datos","Actualización realizada");
    }
    catch{
      this.alertPresent("Datos","Ha habido un error, inténtelo nuevamente");
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['Ok!'],
    });
    alert.present();
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Deseas cancelar la edición?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  async mostrarAlertaEliminarUsuario(){
    const alert = await this.alertCtrl.create({
      cssClass:'danger',
      header:'Eliminar',
      message:'Estás seguro que deseas eliminar tu cuenta?',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass:'secondary',
          handler: () => {}
        },
        {
          text:'Ok',
          handler: () => {
            this.adminServ.deletePasajero(this.user).then(async resp =>{
              localStorage.clear();
              const alert = await this.alertCtrl.create({
                header:"Alerta",
                message:resp['message'],
                buttons:['OK'],
              });
                alert.present();
                this.router.navigateByUrl('login');
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async cargarAvatar(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
      console.log(this.profile)
    })
  }
  
  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType:CameraResultType.Base64,
      source:CameraSource.Camera //Photo o prompt
      
    });
    if(avatar){
      const loading = await this.loadingCtrl.create();
      const result = await this.avatarService.uploadAvatar(avatar);

      if(!result){
        this.alertPresent('Carga avatar fallida','Se ha producido un error, inténtelo más rato.');
      }
    }
  }
}
