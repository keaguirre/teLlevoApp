import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminUsuariosService {

  urlAuto: string = 'http://127.0.0.1:8000/api/auto/';
  urlConductor: string = 'http://127.0.0.1:8000/api/conductor/';
  urlPasajero: string = 'http://127.0.0.1:8000/api/pasajero/';
  urlViaje: string = 'http://127.0.0.1:8000/api/viaje/';

  constructor(private httpClient:HttpClient) { }

//Listados---------------------------------------

  obtenerListadoConductores(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlAuto)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err)
      });
    });
  };
  
  obtenerListadoPasajeros(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlPasajero)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err)
      });
    });
  };

  //Login
  obtenerPasajeroLogin(pasajero:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlPasajero+pasajero)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };
  
  obtenerConductorLogin(conductor:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlConductor+conductor)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };
  
  obtenerListadoAutos(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlAuto)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err)
      });
    });
  };

  obtenerListadoViajes(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlViaje)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err)
      });
    });
  };
  
  
  //Crear---------------------------------------

  createAuto(auto:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlAuto,auto)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

  createConductor(conductor:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlConductor,conductor)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

  createPasajero(pasajero:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlPasajero,pasajero)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };


  createViaje(viaje:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlViaje,viaje)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

  //Actualizar---------------------------------------

  updateAuto(a_id: string, auto: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlAuto + a_id,auto)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };
  updateConductor(c_email: string, conductor: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlConductor + c_email,conductor)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };
  updatePasajero(p_email: string, pasajero: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlPasajero + p_email,pasajero)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };

  updateViaje(v_viaje_id: string, viaje: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlViaje + v_viaje_id,viaje)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };


  //Delete---------------------------------------

  deleteAuto(a_id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlAuto + a_id)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }
  deleteConductor(c_email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlConductor + c_email)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }
  deletePasajero(p_email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlPasajero + p_email)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }
  deleteViaje(v_viaje_id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlViaje + v_viaje_id)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }

  /*
    obtenerListadoPersonas(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.urlEndPoint)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err)
      });
    });
  };

  createPersona(persona:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.urlEndPoint,persona)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  };

  updatePersona(idPersona: string, persona: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.urlEndPoint + idPersona,persona)
      .subscribe(respuesta => {
      resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });    
  };

  deletePersona(idPersona: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.urlEndPoint + idPersona)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      });
    });
  }
  */

}