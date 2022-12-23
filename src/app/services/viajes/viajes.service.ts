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

  updateSolicitud(p_email: string, solicitud: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlSolicitud + p_email,solicitud)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };

  deleteSolicitud(p_email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlSolicitud + p_email)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }

  updateViaje(p_email: string, solicitud: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlSolicitud + p_email,solicitud)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };
}