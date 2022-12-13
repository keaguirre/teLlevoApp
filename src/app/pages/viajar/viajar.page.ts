import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViajesService } from 'src/app/services/viajes/viajes.service';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
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
listado:any;
listadoCheck:any;
c_usr:any;
p_name:any;
name_solicitud: string;
solicitud:any;
isModalOpen = false;
timer:any;
precioOferta: any;
cancelTrip= false;
solicitudForm: any;

comunas: any = [
    {p_comuna:'San Joaquin'},
    {p_comuna:'Macul'},
    {p_comuna:'La Granja'},
    {p_comuna:'Santiago'}
];


  constructor(private adminService: AdminUsuariosService, private viaje:ViajesService, private toast:ToastController ,private loadingCtrl:LoadingController, private formBuilder:FormBuilder) { }


  ngOnInit() {
    document.getElementById("list").hidden = false;
    this.onForm();
  }

  onQuehue(){//Crea la solicitud en la bd
    if(this.onDestination.valid){
      this.viaje.createSolicitud(this.onDestination.value);
      this.onDestination.reset();
      this.onInterval();
      //this.onWaiting();
    }
    else{
      //submit vacio alerta o algun feedback
      this.presentToast();
    }
  }

  onInterval(){
     this.timer = setInterval(() => { this.onWaiting(); }, 3000);
   }

  async onWaiting(){
     this.solicitud = await this.viaje.obtenerSolicitud(localStorage.getItem('logged-usr')).then(respuesta => {
       this.solicitud = respuesta;
       console.log(this.solicitud['precio_oferta'])
       if(this.solicitud['precio_oferta'] > 0){
        this.precioOferta = this.solicitud['precio_oferta'];
         this.setOpen(true);//Abre el modal
         this.onSearch();//devuelve al form
       }
     },
     (err) => {
       console.log("Error: "+err);
     });
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
    this.name_solicitud = localStorage.getItem('logged-name');
    //Formulario
    this.onDestination = this.formBuilder.group({
      precio_oferta: new FormControl(0, [Validators.required]),
      p_email: new FormControl(this.usr_solicitud, [Validators.required]),
      p_name: new FormControl(this.name_solicitud, [Validators.required]),
      p_comuna_destino: new FormControl('', [Validators.required]),
      p_direccion_destino: new FormControl('', [Validators.required, Validators.maxLength(32)]),
      solicitud_estado: new FormControl('buscando', [Validators.required, Validators.maxLength(32)])
    });
  }

  onLoadSolicitud(){
    this.solicitudForm = this.viaje.obtenerSolicitud(localStorage.getItem('logged-usr')).then(respuesta => {
      this.solicitudForm = respuesta;
      this.onUpdateSolicitud();
    });
  }
  onUpdateSolicitud(){
      this.onDestination.patchValue({
        precio_oferta: this.solicitudForm['precio_oferta'],
        p_email: this.solicitudForm['p_email'],
        p_name: this.solicitudForm['p_name'],
        p_comuna_destino: this.solicitudForm['p_comuna_destino'],
        p_direccion_destino: this.solicitudForm['p_direccion_destino'],
        solicitud_estado: 'aceptado',
      })
      this.viaje.updateSolicitud(localStorage.getItem('logged-usr'), this.onDestination.value);
      this.setOpen(false);
  }

  onCancelTrip(){
    this.cancelTrip=true;
    if(this.cancelTrip = true){
      this.viaje.deleteSolicitud(this.usr_solicitud);
    }
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
      clearTimeout(this.timer);
    }
  };

  //Modal
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
