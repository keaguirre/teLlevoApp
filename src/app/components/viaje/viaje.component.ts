import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viaje-component',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss'],
})
export class ViajeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {}

  goToPage(viajar:string){
    this.router.navigate(['$viajar']);
  }
  

}
