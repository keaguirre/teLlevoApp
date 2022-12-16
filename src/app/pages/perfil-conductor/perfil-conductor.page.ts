import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar/avatar.service';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {
  editProfile: any;
  autos: any;
  conductores: any;
  viajes: any;
  user: any;
  loadedUser: any;
  updateInfoUser :FormGroup;
  conductor: any;
  presentingElement = undefined;
  profile: any = null;

  constructor(private menu: MenuController,
    private adminServ:AdminUsuariosService,
    private loadingCtrl:LoadingController,
    private formBuilder:FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl:AlertController,
    private avatarService: AvatarService,
    private router: Router,
    private modalCtrl: ModalController) {this.cargarAvatar(); }

  ngOnInit() {
    //this.menu.enable(false);
    this.presentingElement = document.querySelector('.ion-page');
    //load usr
    //build form
    this.updateInfoUser = this.formBuilder.group({
      c_email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(32)]),
      c_name: new FormControl('', [Validators.minLength(2), Validators.maxLength(32)]),
      c_lastname: new FormControl('', [Validators.minLength(2), Validators.maxLength(32)]),
      c_password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
      c_password_confirm: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
      c_pnumber: new FormControl('',[Validators.minLength(9), Validators.maxLength(12), Validators.maxLength(32)]),
      c_image: new FormControl('',[Validators.minLength(1), Validators.maxLength(54)])
    });
    this.onLoadUsr();
    this.cargarAvatar();
  }
  
  onLoadUsr(){
    this.user = localStorage.getItem("c_logged-usr");
    this.loadedUser = this.adminServ.obtenerConductorLogin(this.user).then(respuesta => {
    this.conductor = respuesta;
    this.onLoadForm();
    });
  }

  onLoadForm(){
    this.updateInfoUser.patchValue({
      c_email: this.conductor['c_email'],
      c_name: this.conductor['c_name'],
      c_lastname: this.conductor['c_lastname'],
      c_password: this.conductor['c_password'],
      c_password_confirm: this.conductor['c_password'],
      c_pnumber: this.conductor['c_pnumber'],
      c_image: this.conductor['c_image'],
      c_state: this.conductor['c_state'],
      c_car: this.conductor['c_car'],
    })
  }

  onUpdate(){ //envia el form de update
    try{
      this.adminServ.updateConductor(this.conductor['c_email'],this.updateInfoUser.value);
      this.alertPresent("Datos","Actualización realizada");
      return this.modalCtrl.dismiss(null, 'confirm');
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

  async dismissCancelar(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Deseas cancelar la edición?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
          handler: () =>{
            return this.modalCtrl.dismiss(null, 'confirm');
          }
        },
        {
          text: 'No',
          role: 'cancel'
        },
      ],
    });
    actionSheet.present();
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
            this.adminServ.deleteConductor(this.user).then(async resp =>{
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

  cargarAvatar(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
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
