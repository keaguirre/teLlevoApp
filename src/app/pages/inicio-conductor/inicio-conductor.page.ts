import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-conductor',
  templateUrl: './inicio-conductor.page.html',
  styleUrls: ['./inicio-conductor.page.scss'],
})
export class InicioConductorPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    //this.menu.enable(false);
  }

}
