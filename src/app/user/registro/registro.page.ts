import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  pasajero: any;
  p_email: string;
  p_name: string;
  p_lastname: string;
  p_password: string;
  p_password_confirm: string;
  p_pnumber: string;
  p_image: string;
  const: string;
  signup :FormGroup;

  constructor(private router: Router,
    private alertCtrl:AlertController,
    private adminUsuarios: AdminUsuariosService,
    private formBuilder:FormBuilder,
    private menu: MenuController,
    private loadingCtrl:LoadingController,
    private authService: AuthService) {
    this.menu.enable(false); //desactive el swipe sidebar en el registro
  }
  ngOnInit() {
    this.signup = this.formBuilder.group({
      p_email: new FormControl('', [Validators.required, Validators.email]),
      p_name: new FormControl('', [Validators.minLength(2)]),
      p_lastname: new FormControl('', [Validators.minLength(2)]),
      p_password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      p_password_confirm: new FormControl('', [Validators.required, Validators.minLength(5)]),
      p_pnumber: new FormControl('',[Validators.minLength(9), Validators.maxLength(12)]),
      p_image: new FormControl('')
    });
  }

  
  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.register(this.signup.value['p_email'],this.signup.value['p_password']);
    await loading.dismiss();
  }

  onSubmit(){
    //asigna imagen por default al usuario que podra cambiar en su perfil
    const default_image = 'https://ionicframework.com/docs/img/demos/avatar.svg';
    Object.assign(this.signup.value,{p_image:default_image})
    //submit
    try{
      this.pasajero = this.signup.value;
      this.adminUsuarios.createPasajero(this.pasajero)
      this.alertPresent('Registro','Registrado correctamente');
      this.register();
      this.router.navigateByUrl('login');
      
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