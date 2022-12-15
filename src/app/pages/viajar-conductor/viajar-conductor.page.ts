import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ViajesService } from 'src/app/services/viajes/viajes.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-viajar-conductor',
  templateUrl: './viajar-conductor.page.html',
  styleUrls: ['./viajar-conductor.page.scss'],
})
export class ViajarConductorPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  // ofertaDePrecioForm :FormGroup;
  listadoSolicitudes:any = [];
  precio: any;
  usr_pasajero: any;
  page: number = 1;
  resultados: any;
  response:any;
  isModalOpen = false;
  listHidden:boolean = true;
  ofertaDePrecioForm:FormGroup;
  viajeForm:FormGroup;
  timer:any;
  checkDeSolicitudes:any;
  nombre:any;

  user:any;
  Conductor:any;
  auto:any;
  loadedUser:any;
  pasajero:any;
  solicitud:any;
  solicitudEnBD:any;
  userLogeado:any;

  constructor(private formBuilder:FormBuilder,
    private alertController: AlertController,
    private viaje: ViajesService,
    private adminServ: AdminUsuariosService) { }

  ngOnInit() {
  this.formSolicitud();//inicializo el formulario para poder llenarlo
  this.formViaje();//inicializo from de viaje
  this.getUserLogeado();//obtiene el conductor logeado
  document.getElementById("viajando").hidden = true;
  this.precio = '';
  this.nombre = '';
  }

  getUserLogeado(){//Trae al objeto del usuario conductor logeado
    this.userLogeado = localStorage.getItem("c_logged-usr");
    if(this.userLogeado != null){
      this.Conductor = this.adminServ.obtenerConductorLogin(this.userLogeado).then(respuesta => {
        this.Conductor = respuesta;
        });
    }
  }
  
  onConductorDisponible(){
    this.checkDeSolicitudes = setInterval(() => { this.onSolicitudList(); }, 3000);
  }
  onSolicitudList(){ //Se trae el listado de solicitudes
    this.viaje.obtenerListadoSolicitudes().then(respuesta => {
      this.listadoSolicitudes = [] //Limpia el listado
      this.listadoSolicitudes = [...this.listadoSolicitudes,...respuesta]; //iterar sobre this.listado
    },
    (err) => {
      console.log("Error: "+err);
    });
    
  }

  ngOnDestroy(){ //Al dejar la pagina se ejecutan estos eventos
    clearTimeout(this.timer);
    this.viajeForm.reset();
    this.ofertaDePrecioForm.reset();
    this.precio = '';
    this.nombre = '';
  }

  onDisponible(){
    //form
    if(this.listHidden === false){
      this.listHidden = true;
      document.getElementById("listaDeSolicitudes").hidden = true;
    }
    else if(this.listHidden === true){
      this.listHidden = false;
      document.getElementById("listaDeSolicitudes").hidden = false;
      this.onConductorDisponible();
    }
    //loader
    // if(this.listHidden1 === true){
    //   this.listHidden1 = false;
    //   document.getElementById("loader").hidden = false;
    // }
    // else if(this.listHidden1 === false){
    //   this.listHidden1 = true;
    //   document.getElementById("loader").hidden = true;
    // }
  };

  loadFormSolicitud(){
    //al seleccionar una solicitud para ofertar se actualizan los campos de la solicitud para ingresarle el precio
      this.ofertaDePrecioForm.patchValue({
      p_email: this.solicitud['p_email'],
      precio_oferta: this.precio,
      p_comuna_destino: this.solicitud['p_comuna_destino'],
      p_direccion_destino: this.solicitud['p_direccion_destino'],
      p_name: this.solicitud['p_name'],
      solicitud_estado: 'ofertada'
    });
    this.viaje.updateSolicitud(this.solicitud['p_email'],this.ofertaDePrecioForm.value)
  }
    formSolicitud(){
     //Formulario
       this.ofertaDePrecioForm = this.formBuilder.group({
        p_email: new FormControl('', [Validators.required]),
        precio_oferta: new FormControl('', [Validators.required]),
        p_comuna_destino: new FormControl('', [Validators.required]),
        p_direccion_destino: new FormControl('', [Validators.required, Validators.maxLength(32)]),
        p_name: new FormControl('', [Validators.required]),
        solicitud_estado: new FormControl('en espera',[Validators.required])
    });
 }
 formViaje(){
  //Formulario
    this.viajeForm = this.formBuilder.group({
     v_com_dest: new FormControl('', [Validators.required]),
     v_dir_dest: new FormControl('', [Validators.required]),
     v_val_trip: new FormControl('', [Validators.required]),
     v_state: new FormControl('', [Validators.required]),
     v_conductor_id: new FormControl('',[Validators.required]),
     v_pasajero_id: new FormControl('', [Validators.required]),
     v_auto_id: new FormControl('', [Validators.required])
 });
}
loadFormViaje(){
  //Se llenan los campos del formulario de viaje para poder crearlo
    this.viajeForm.patchValue({
      v_com_dest: this.solicitud['p_comuna_destino'],
      v_dir_dest: this.solicitud['p_direccion_destino'],
      v_val_trip: this.precio,
      v_state: 'viajando',
      v_conductor_id: this.Conductor['c_email'],
      v_pasajero_id: this.solicitud['p_email'],
      v_auto_id: this.Conductor['c_car']
  });
}

 onSolicitudSelected(solicitud){//Al presionar ofertar en una solicitud de la lista de solicitudes se llena la variable JSON solicitud
  solicitud: JSON.stringify(solicitud)
  this.solicitud = solicitud
 }

 onEsperaDeRespuesta(){
  this.timer = setInterval(() => { this.onWaitingForApproval(); }, 2000);
}

 async onWaitingForApproval(){
  console.log("Esperando aprobacion de precio")
   this.solicitudEnBD = await this.viaje.obtenerSolicitud(this.solicitud['p_email']).then(respuesta => {
     this.solicitudEnBD = respuesta;
     if(this.solicitudEnBD['solicitud_estado'] == 'aceptada'){
      clearTimeout(this.timer);
      this.loadFormViaje();
      this.adminServ.createViaje(this.viajeForm.value);
      this.viaje.deleteSolicitud(this.solicitudEnBD['p_email']);
      this.viajeForm.reset();
      this.ofertaDePrecioForm.reset();
      this.precio = '';
      this.nombre = this.solicitud['p_name']
      document.getElementById("viajar-conductor").hidden = true;
      document.getElementById("viajando").hidden = false;
     }
     else if(this.solicitudEnBD['solicitud_estado'] == 'rechazada')
     {
      clearTimeout(this.timer);
      this.solicitudEnBD['solicitud_estado'] = 'esperando';
      this.solicitudEnBD['precio_oferta'] = 0;
      this.viaje.updateSolicitud(this.solicitud['p_email'],this.solicitudEnBD);
      this.viajeForm.reset();
      this.ofertaDePrecioForm.reset();
      this.precio = '';
     }
   },
   (err) => {
     console.log("Error: "+err);
   });
}

  //Modal
  cancelar() {
    this.modal.dismiss(null, 'cancelar');
    this.precio = '';
    this.ofertaDePrecioForm.reset();
  }
  ofertar() {
    this.modal.dismiss(null, 'ofertar');
    this.loadFormSolicitud();
    this.onEsperaDeRespuesta();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Hello, ${ev.detail.data}!`;
    // }
  }

  


}