import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthUserGuard } from './guards/authUser/auth-user.guard';
// import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('../app/pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'inicio/:id',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'viajar',
    loadChildren: () => import('./pages/viajar/viajar.module').then( m => m.ViajarPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./user/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'coversor',
    loadChildren: () => import('./pages/coversor/coversor.module').then( m => m.CoversorPageModule),
    canLoad: [AuthUserGuard]
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./user/login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pages/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./user/registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'viajar-conductor',
    loadChildren: () => import('./pages/viajar-conductor/viajar-conductor.module').then( m => m.ViajarConductorPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
 

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
