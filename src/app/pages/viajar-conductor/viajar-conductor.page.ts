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

  user:any;
  loadedUser:any;
  pasajero:any;
  solicitud:any;

  constructor(private formBuilder:FormBuilder,
    private alertController: AlertController,
    private viaje: ViajesService,
    private adminServ: AdminUsuariosService) { }

  ngOnInit() {this.onForm();//inicializo el formulario para poder llenarlo
  }
  
  onSolicitudList(){ //listado solicitudes de viajes para el benja, chofer debe updatear el valor
    this.viaje.obtenerListadoSolicitudes().then(respuesta => {
      this.listadoSolicitudes = [] //Limpia el listado
      this.listadoSolicitudes = [...this.listadoSolicitudes,...respuesta]; //iterar sobre this.listado

      console.log(this.listadoSolicitudes)
    },
    (err) => {
      console.log("Error: "+err);
    });
    
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
      this.onSolicitudList();
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

  onLoadForm(){
    //al seleccionar una solicitud para ofertar se actualizan los campos de la solicitud para ingresarle el precio
      this.ofertaDePrecioForm.patchValue({
      p_email: this.solicitud['p_email'],
      precio_oferta: this.precio,
      p_comuna_destino: this.solicitud['p_comuna_destino'],
      p_direccion_destino: this.solicitud['p_direccion_destino'],
      p_name: this.solicitud['p_name'],
      solicitud_estado: this.solicitud['solicitud_estado'],
    });
  }
    onForm(){
     //Formulario
       this.ofertaDePrecioForm = this.formBuilder.group({
        p_email: new FormControl('', [Validators.required]),
        precio_oferta: new FormControl(null, [Validators.required]),
        p_comuna_destino: new FormControl('', [Validators.required]),
        p_direccion_destino: new FormControl('', [Validators.required, Validators.maxLength(32)]),
        p_name: new FormControl('', [Validators.required]),
        solicitud_estado: new FormControl('en espera',[Validators.required])
    });
 }

 onSolicitudSelected(solicitud){
  solicitud: JSON.stringify(solicitud)
  this.solicitud = solicitud
 }

  //Modal
  cancelar() {
    this.modal.dismiss(null, 'cancelar');
    this.precio = null;
  }
  ofertar() {
    this.modal.dismiss(null, 'ofertar');
    this.onLoadForm();
    console.log(this.ofertaDePrecioForm.value)
  }

  setOpen(isOpen: boolean) {
    this.precio = null;
    this.isModalOpen = isOpen;
  }


  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'confirm') {
    //   this.message = `Hello, ${ev.detail.data}!`;
    // }
  }

  


}