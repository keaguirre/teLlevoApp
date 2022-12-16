import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(() => {
    const ionRouterOutletStub = () => ({ swipeGesture: {} });
    const menuControllerStub = () => ({ enable: arg => ({}) });
    const activatedRouteStub = () => ({});
    const routerStub = () => ({});
    const adminUsuariosServiceStub = () => ({
      obtenerPasajeroLogin: usr => ({ then: () => ({}) })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [InicioPage],
      providers: [
        { provide: IonRouterOutlet, useFactory: ionRouterOutletStub },
        { provide: MenuController, useFactory: menuControllerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: AdminUsuariosService, useFactory: adminUsuariosServiceStub }
      ]
    });
    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'onLoadUsr').and.callThrough();
      component.ngOnInit();
      expect(component.onLoadUsr).toHaveBeenCalled();
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
});
