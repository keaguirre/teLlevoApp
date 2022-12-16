import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminUsuariosService } from './services/adminUsuarios/admin-usuarios.service';
import { AvatarService } from './services/avatar/avatar.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({});
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const adminUsuariosServiceStub = () => ({
      obtenerPasajeroLogin: user => ({ then: () => ({}) })
    });
    const avatarServiceStub = () => ({
      getUserProfile: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: AdminUsuariosService, useFactory: adminUsuariosServiceStub },
        { provide: AvatarService, useFactory: avatarServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`appPages has default value`, () => {
    expect(component.appPages).toEqual([, , , , ,]);
  });

  it(`labels has default value`, () => {
    expect(component.labels).toEqual([,]);
  });

  describe('onLogout', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.onLogout();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });

  describe('onLoadUsr', () => {
    it('makes expected calls', () => {
      const adminUsuariosServiceStub: AdminUsuariosService = fixture.debugElement.injector.get(
        AdminUsuariosService
      );
      spyOn(adminUsuariosServiceStub, 'obtenerPasajeroLogin').and.callThrough();
      component.onLoadUsr();
      expect(adminUsuariosServiceStub.obtenerPasajeroLogin).toHaveBeenCalled();
    });
  });

  describe('cargarAvatar', () => {
    it('makes expected calls', () => {
      const avatarServiceStub: AvatarService = fixture.debugElement.injector.get(
        AvatarService
      );
      spyOn(avatarServiceStub, 'getUserProfile').and.callThrough();
      component.cargarAvatar();
      expect(avatarServiceStub.getUserProfile).toHaveBeenCalled();
    });
  });
});
