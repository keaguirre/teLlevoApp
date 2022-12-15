import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AdminUsuariosService } from './services/adminUsuarios/admin-usuarios.service';
import { AuthService } from './services/auth/auth.service';
import { AvatarService }  from './services/avatar/avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})

export class AppComponent {
  user:any;
  loadedUser:any;
  currentUser:any;
  profile: any = null;

  constructor(private avatarService: AvatarService, private router: Router, private adminServ: AdminUsuariosService, private route: ActivatedRoute) {}

  ngDoCheck(){
    this.currentUser = localStorage?.getItem('logged-name');
    // if (localStorage?.getItem('currentSession')){
    //   this.cargarAvatar();
    // }
  }

  ngOnInit() {
  }
  onLogout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  onLoadUsr(){
    this.user = localStorage.getItem("logged-usr");
    if(this.user != null){
      this.loadedUser = this.adminServ.obtenerPasajeroLogin(this.user).then(respuesta => {
        this.currentUser = respuesta;
        });
    }
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
  
  cargarAvatar(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
    })
  }


}

