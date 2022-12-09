import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { GeolocalizacionService } from 'src/app/services/geolocalizacion/geolocalizacion.service';

//llamando a la api del clima desde enviroment
const apiClimaUrl = environment.apiClimaUrl;
const apiClimaKey = environment.apiClimaKey;

@Component({
  selector: 'clima-component',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent implements OnInit {
  
  weatherTemp :any
  weatherDescription :any

  latitud :any
  longitud :any
  location : any

  todayDate = new Date()
  
  constructor(private router: Router,public httpClient:HttpClient, private geo:GeolocalizacionService) {
    
   }
  ngOnInit() {
    this.loadLocation();
  }

  loadLocation(){
    this.location = this.geo.fetchLocation().then(response => {
    //Se asignan la latitud y longitud desde el servicio de geolocalizacion
    this.latitud = response['latitude'];
    this.longitud = response['longitude'];
    this.loadData()
  });
}

  loadData(){
      this.httpClient.get(`${apiClimaUrl}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${apiClimaKey}&units=metric`).subscribe(results =>{
      this.weatherTemp = results['main'];
      this.weatherDescription = results['weather'];
      this.weatherDescription = this.weatherDescription['0'];
    })
  }
}
