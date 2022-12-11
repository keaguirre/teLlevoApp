import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'viaje-component',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss'],
})
export class ViajeComponent implements OnInit {

  constructor(public router: Router) { }//puse el router publico para poder acceder desde los componentes
  ngOnInit() {}

  goToPage(viajar:string){
    this.router.navigate(['$viajar']);
  }
  

}
