import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private httpClient:HttpClient) { }
  
  kevinProfile:string = 'https://api.github.com/users/keaguirre'
  kevinImg:any;
  benjaProfile:string = 'https://api.github.com/users/BenjaminWuff'
  benjaImg:any;
  johanProfile:string = 'https://api.github.com/users/JDN2377'
  johanImg:any;

  ngOnInit() {
    this.onLoadProfileKevin();
    this.onLoadProfileBenja();
    this.onLoadProfileJohan();
  }

  onLoadProfileKevin(){
    this.obtenerInfoKevin().then(respuesta => {
      this.kevinImg = respuesta['avatar_url'];
    });
  }
  onLoadProfileBenja(){
    this.obtenerInfoBenja().then(respuesta => {
      this.benjaImg = respuesta['avatar_url'];
    });
  }
  onLoadProfileJohan(){
    this.obtenerInfoJohan().then(respuesta => {
      this.johanImg = respuesta['avatar_url'];
    });
  }



    obtenerInfoKevin(): Promise<any> {
      return new Promise((resolve,reject) => {
        this.httpClient.get(this.kevinProfile)
        .subscribe(respuesta => {
          resolve(respuesta);
        },
        (err) => {
          reject(err)
        });
      });
    };
    obtenerInfoBenja(): Promise<any> {
      return new Promise((resolve,reject) => {
        this.httpClient.get(this.benjaProfile)
        .subscribe(respuesta => {
          resolve(respuesta);
        },
        (err) => {
          reject(err)
        });
      });
    };
    obtenerInfoJohan(): Promise<any> {
      return new Promise((resolve,reject) => {
        this.httpClient.get(this.johanProfile)
        .subscribe(respuesta => {
          resolve(respuesta);
        },
        (err) => {
          reject(err)
        });
      });
    };

}
