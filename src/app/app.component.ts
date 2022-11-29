import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AdminUsuariosService } from './services/adminUsuarios/admin-usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})

export class AppComponent {
  user:any;
  loadedUser:any;
  currentUser:any;

  constructor(private router: Router, private adminServ: AdminUsuariosService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentUser = localStorage.getItem('logged-usr');
    this.onLoadUsr();
  }
  onLogout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  onLoadUsr(){
    this.user = localStorage.getItem("logged-usr");
    this.loadedUser = this.adminServ.obtenerPasajeroLogin(this.user).then(respuesta => {
    this.currentUser = respuesta;
    });
  }


  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'newspaper' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Viajar', url: 'viajar', icon: 'car' },
    { title: 'Ayuda', url: 'faq', icon: 'help-buoy' },
    { title: 'Nuestro equipo', url: 'about', icon: 'people' },
    { title: 'Conversor', url: 'coversor', icon: 'earth' }
  ];
  public labels = [
    {title:'DuocUC', url: '/www.duocuc.cl', icon: 'bookmark'},
    {title: 'Blackboard', url: 'about', icon: 'bookmark'},
  ];
  



}

