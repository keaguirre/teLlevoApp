import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViajesService } from 'src/app/services/viajes/viajes.service';
@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {
private listHidden: boolean = false;
private listHidden1: boolean = true;
onDestination :FormGroup;
usr:any;
usr_solicitud:any;
response:any;

comunas: any = [
    {p_comuna:'San Joaquin'},
    {p_comuna:'Macul'},
    {p_comuna:'La Granja'},
    {p_comuna:'Santiago'}
];

  constructor(private viaje:ViajesService, private toast:ToastController ,private loadingCtrl:LoadingController, private formBuilder:FormBuilder) { }


  ngOnInit() {
    document.getElementById("list").hidden = false;
    this.onForm();
  }

  onQuehue(){//si el formulario es valido, agregar usr-logged al form
    if(this.onDestination.valid){
      this.viaje.createSolicitud(this.onDestination.value);
      this.onDestination.reset();
      this.onSolicitudListTest();
    }
    else{
      //submit vacio alerta o algun feedback
      this.presentToast();
    }
  }

  onSolicitudListTest(){
    this.response = this.viaje.obtenerListadoSolicitudes().then(respuesta => {
      this.response = respuesta;
    },
    (err) => {
      console.log(err);
    });
    console.log(this.response);
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Error, Ingrese todos los campos',
      duration: 2000,
      cssClass: 'custom-toast',
      icon:'alert'
    });
    await toast.present();
  }

  onForm(){
    this.usr_solicitud = localStorage.getItem('logged-usr');
    //Formulario
    this.onDestination = this.formBuilder.group({
      precio_oferta: new FormControl(0, [Validators.required]),
      p_email: new FormControl(this.usr_solicitud, [Validators.required]),
      p_comuna_destino: new FormControl('', [Validators.required]),
      p_direccion_destino: new FormControl('', [Validators.required, Validators.maxLength(32)])
    });
  }

  onSearch(){
    //form
    if(this.listHidden === false){
      this.listHidden = true;
      document.getElementById("list").hidden = true;
    }
    else if(this.listHidden === true){
      this.listHidden = false;
      document.getElementById("list").hidden = false;
    }
    //loader
    if(this.listHidden1 === true){
      this.listHidden1 = false;
      document.getElementById("loader").hidden = false;
    }
    else if(this.listHidden1 === false){
      this.listHidden1 = true;
      document.getElementById("loader").hidden = true;
    }
  };
}
