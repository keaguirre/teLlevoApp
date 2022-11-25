import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage implements OnInit {
  presentingElement = undefined;
  //Auto
  c_signup :FormGroup;
  a_signup :FormGroup;
  a_id:string;
  a_brand:string;
  a_model:string;
  a_color:string;
  a_state:string;
  //-------------------------
  //Conductor
  conductor:any;
  patente: any;
  c_email: string;
  c_name: string;
  c_lastname: string;
  c_password: string;
  c_password_confirm: string;
  c_pnumber: string;
  c_image: string;

  constructor(
    private router: Router,
    private alertCtrl:AlertController,
    private actionSheetCtrl: ActionSheetController,
    private adminUsuarios: AdminUsuariosService,
    private formBuilder:FormBuilder,
    private menu: MenuController) {
    this.menu.enable(false);
  }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
        //Conductor
      this.c_signup = this.formBuilder.group({
        c_email: new FormControl('', [Validators.required, Validators.email]),
        c_name: new FormControl('', [Validators.minLength(2)]),
        c_lastname: new FormControl('', [Validators.minLength(2)]),
        c_password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        c_password_confirm: new FormControl('', [Validators.required, Validators.minLength(5)]),
        c_pnumber: new FormControl('',[Validators.minLength(9), Validators.maxLength(12)]),
        c_image: new FormControl(''),
        c_car: new FormControl('')
      });

    //Auto
    this.a_signup = this.formBuilder.group({
      a_id: new FormControl('',[Validators.required, Validators.minLength(2)]),
      a_brand: new FormControl('',[Validators.required]),
      a_model: new FormControl('',[Validators.required]),
      a_color: new FormControl('',[Validators.required]),
      a_state: new FormControl('',[Validators.required])
    });

  }//fin ngOnInit

  canDismiss = async () => { //cancelar el modal de registro de auto
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estás seguro?',
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

  //conductor
  onSubmit(){
      this.conductor = this.c_signup.value;//guarda los valores del conductor en un arreglo
  }
    
  onCarSubmit(){
    //Asigna img por defecto al conductor
    const default_image = 'https://ionicframework.com/docs/img/demos/avatar.svg';
    Object.assign(this.c_signup.value,{c_image:default_image})
    //Asigna estado por defecto al auto
    const default_state = 'Default';
    Object.assign(this.a_signup.value,{a_state:default_state})
    //Asigna la patente al conductor
    this.patente = this.a_signup.value['a_id']
    Object.assign(this.c_signup.value,{c_car:this.patente})
    //Submit
    try{
      this.adminUsuarios.createAuto(this.a_signup.value);//post
      this.adminUsuarios.createConductor(this.c_signup.value);//post
      this.alertPresent('Registro','Registrado correctamente');
      this.router.navigateByUrl('login-conductor');
    }
    catch{
      this.alertPresent('Error en el registro','Intente nuevamente');
    }
  }
  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK'],
    });
    alert.present();
  }
}
