import { Component, OnInit, ViewChild } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor/conversor.service';
import { OverlayEventDetail } from '@ionic/core';

export interface Serie {
  fecha: Date;
  valor: number;
}

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {


  constructor(private conversorService : ConversorService) { }

  currRate: any;
  toValue: any;
  toValue2: any;
  fromValue: any;
  fromValue2: any;
  doular: any;
  yuro: any;
  convert: any;
  fromCurr: any;
  toCurr: any;

  ngOnInit() {
    this.loadDolar();
    this.loadYuro();
    this.convertDolarOne();
    this.convertDolarTwo();
    this.convertYuro1();
    this.convertYuro2();

  }

  async loadDolar() {
    this.conversorService.getDolar().subscribe(
      (res) => {

        //console.log(res);
        this.currRate = res['serie']
        this.doular = this.currRate[0].valor;
        //console.log(this.doular)

      }
    )
  }

  async loadYuro() {
    this.conversorService.getYuro().subscribe(
      (res) => {

        //console.log(res);
        this.currRate = res['serie']
        this.yuro = this.currRate[0].valor;
        //console.log(this.yuro)
      }
    )
  }

  convertDolarOne() {
    // this.toValue = this.fromValue * parseInt(this.doular);

    var num = this.fromValue * parseInt(this.doular);
    this.toValue = num.toFixed(2)

  }

  convertDolarTwo() {
    //this.fromValue = this.toValue / parseInt(this.doular);
    var num = this.toValue / parseInt(this.doular);
    this.fromValue = num.toFixed(2)  
  }

  convertYuro1() {
    var num = this.fromValue2 * parseInt(this.yuro);
    this.toValue2 = num.toFixed(2)
  }

  convertYuro2() {
    var num = this.toValue2 / parseInt(this.yuro);
    this.fromValue2 = num.toFixed(2)
  }


}