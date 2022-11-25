import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUsuariosService } from '../../services/adminUsuarios/admin-usuarios.service'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage implements OnInit {
  loading : HTMLIonLoadingElement;
  isTextFieldType: boolean;
  conductorLogin: FormGroup;
  p_email: string;
  p_password: any;
  email:any;
  response: any;

  constructor(private formBuilder:FormBuilder,
    private adminUsuarios: AdminUsuariosService,
    private loadingCtrl: LoadingController,
    private menu: MenuController,
    private router: Router,
    private alertCtrl:AlertController) {
    this.menu.enable(false); //desactiva el SideMenu en esta pagina (cuando se vuelve a entrar)
  }
  ngOnInit(): void {
    this.presentLoading('<img src="../../../assets/duocLogo/fondo-transparente.png">'); //llama al metodo de carga con el logo del duoc onInit
    this.conductorLogin = this.formBuilder.group({
      c_email: new FormControl('', [Validators.required, Validators.email]),
      c_password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }
  async presentLoading(message: string) { //Carga logo duoc al iniciar
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'circular',
      cssClass: 'spinner-color',
      duration: 2000
    });
    await this.loading.present();
  }
  onConductoresLogin(){
    this.response = this.adminUsuarios.obtenerConductorLogin(this.conductorLogin.value.c_email).then(respuesta => {
      this.response = respuesta;
      if (respuesta['c_email'] == this.conductorLogin.value.c_email && respuesta['c_password'] == this.conductorLogin.value.c_password){
        this.router.navigateByUrl('inicio');
      }
      else{
        this.alertPresent('Login fallido','Intente nuevamente');
      }
    },
    (err) => {
      console.log(err)
    });
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
