import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'newspaper' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Viajar', url: 'viajar', icon: 'car' },
    { title: 'Ayuda', url: 'faq', icon: 'help-buoy' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Registrarse', url: 'registro', icon: 'log-out' },
    { title: 'Nuestro equipo', url: 'about', icon: 'people' },
    { title: 'Coversor', url: 'coversor', icon: 'hammer' },
    

  ];
  public labels = [
    {title:'DuocUC', url: 'faq', icon: 'bookmark'},
    {title: 'Blackboard', url: 'about', icon: 'bookmark'},
    {title: 'Cerrar Sesion', url: 'login', icon: 'log-out'}
  ];
  constructor() {}
}
