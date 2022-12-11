import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

//pasajerosEnCola:any[];
pasajerosEnCola=[];
urlSolicitud: string = environment.urlSolicitud;

constructor(private httpClient:HttpClient) { }

  onConductorQueue(){

  }

  onConductorListado(){
    return this.pasajerosEnCola;
  }

  onSolicitud(){

  }

  createSolicitud(solicitud:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlSolicitud,solicitud)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

  obtenerListadoSolicitudes(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlSolicitud)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err)
      });
    });
  };

  obtenerSolicitud(solicitud:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlSolicitud+solicitud)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

  updateSolicitud(id_solicitud: string, solicitud: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlSolicitud + id_solicitud,solicitud)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };

  deleteSolicitud(id_solicitud: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlSolicitud + id_solicitud)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }
}