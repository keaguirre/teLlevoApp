import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

//pasajerosEnCola:any[];
pasajerosEnCola=[];

  constructor() { }

  onPasajeroQueue(p_cola:any){ //recibe la solicitud de viaje del pasajero
    //this.pasajerosEnCola=[p_cola];
    this.pasajerosEnCola.push(p_cola);
  }

  onConductorQueue(){

  }

  onConductorListado(){
    return this.pasajerosEnCola;
  }

  onSolicitud(){

  }
}