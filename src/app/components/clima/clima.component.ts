import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';

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
  coordenadas :any
  latitud :any
  longitud :any
  todayDate = new Date()
  
  constructor(private router: Router,public httpClient:HttpClient) {
    this.fetchLocation()
   }

   async fetchLocation(){
    const location = await Geolocation.getCurrentPosition();
      this.coordenadas = location['coords'];
      this.latitud = this.coordenadas['latitude'];
      this.longitud = this.coordenadas['longitude'];
      this.loadData();
  }

  ngOnInit() {
  }

  loadData(){
      this.httpClient.get(`${apiClimaUrl}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${apiClimaKey}&units=metric`).subscribe(results =>{
      this.weatherTemp = results['main'];
      this.weatherDescription = results['weather'];
      this.weatherDescription = this.weatherDescription['0'];
    })
  }

}
