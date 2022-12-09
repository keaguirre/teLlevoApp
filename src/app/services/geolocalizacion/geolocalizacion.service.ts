import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  //Variables
  coordenadas :any

  constructor() { }

  async fetchLocation(){
    const location = await Geolocation.getCurrentPosition();
      this.coordenadas = location['coords'];
      return this.coordenadas;
  }

}
