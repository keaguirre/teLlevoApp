import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar/avatar.service';
import { PerfilPage } from './perfil.page';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(() => {
    const actionSheetControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const alertControllerStub = () => ({
      create: object => ({ present: () => ({}) })
    });
    const loadingControllerStub = () => ({ create: () => ({}) });
    const modalControllerStub = () => ({ dismiss: (arg, string) => ({}) });
    const adminUsuariosServiceStub = () => ({
      obtenerPasajeroLogin: user => ({ then: () => ({}) }),
      updatePasajero: (arg, value) => ({}),
      deletePasajero: user => ({ then: () => ({}) })
    });
    const formBuilderStub = () => ({ group: object => ({}) });
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const avatarServiceStub = () => ({
      getUserProfile: () => ({ subscribe: f => f({}) }),
      uploadAvatar: avatar => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PerfilPage],
      providers: [
        {
          provide: ActionSheetController,
          useFactory: actionSheetControllerStub
        },
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: LoadingController, useFactory: loadingControllerStub },
        { provide: ModalController, useFactory: modalControllerStub },
        { provide: AdminUsuariosService, useFactory: adminUsuariosServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: Router, useFactory: routerStub },
        { provide: AvatarService, useFactory: avatarServiceStub }
      ]
    });
    spyOn(PerfilPage.prototype, 'cargarAvatar');
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`presentingElement has default value`, () => {
    expect(component.presentingElement).toEqual(undefined);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(PerfilPage.prototype.cargarAvatar).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(component, 'onLoadUsr').and.callThrough();
      (<jasmine.Spy>component.cargarAvatar).calls.reset();
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(component.onLoadUsr).toHaveBeenCalled();
      expect(component.cargarAvatar).toHaveBeenCalled();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('onLoadUsr', () => {
    it('makes expected calls', () => {
      const adminUsuariosServiceStub: AdminUsuariosService = fixture.debugElement.injector.get(
        AdminUsuariosService
      );
      spyOn(component, 'onLoadForm').and.callThrough();
      spyOn(adminUsuariosServiceStub, 'obtenerPasajeroLogin').and.callThrough();
      component.onLoadUsr();
      expect(component.onLoadForm).toHaveBeenCalled();
      expect(adminUsuariosServiceStub.obtenerPasajeroLogin).toHaveBeenCalled();
    });
  });

  describe('onUpdate', () => {
    it('makes expected calls', () => {
      const modalControllerStub: ModalController = fixture.debugElement.injector.get(
        ModalController
      );
      const adminUsuariosServiceStub: AdminUsuariosService = fixture.debugElement.injector.get(
        AdminUsuariosService
      );
      spyOn(component, 'alertPresent').and.callThrough();
      spyOn(modalControllerStub, 'dismiss').and.callThrough();
      spyOn(adminUsuariosServiceStub, 'updatePasajero').and.callThrough();
      component.onUpdate();
      expect(component.alertPresent).toHaveBeenCalled();
      expect(modalControllerStub.dismiss).toHaveBeenCalled();
      expect(adminUsuariosServiceStub.updatePasajero).toHaveBeenCalled();
    });
  });

  describe('dismissCancelar', () => {
    it('makes expected calls', () => {
      const actionSheetControllerStub: ActionSheetController = fixture.debugElement.injector.get(
        ActionSheetController
      );
      const modalControllerStub: ModalController = fixture.debugElement.injector.get(
        ModalController
      );
      spyOn(actionSheetControllerStub, 'create').and.callThrough();
      spyOn(modalControllerStub, 'dismiss').and.callThrough();
      component.dismissCancelar();
      expect(actionSheetControllerStub.create).toHaveBeenCalled();
      expect(modalControllerStub.dismiss).toHaveBeenCalled();
    });
  });

  describe('mostrarAlertaEliminarUsuario', () => {
    it('makes expected calls', () => {
      const alertControllerStub: AlertController = fixture.debugElement.injector.get(
        AlertController
      );
      const adminUsuariosServiceStub: AdminUsuariosService = fixture.debugElement.injector.get(
        AdminUsuariosService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(alertControllerStub, 'create').and.callThrough();
      spyOn(adminUsuariosServiceStub, 'deletePasajero').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.mostrarAlertaEliminarUsuario();
      expect(alertControllerStub.create).toHaveBeenCalled();
      expect(adminUsuariosServiceStub.deletePasajero).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });

  describe('cargarAvatar', () => {
    it('makes expected calls', () => {
      const avatarServiceStub: AvatarService = fixture.debugElement.injector.get(
        AvatarService
      );
      spyOn(avatarServiceStub, 'getUserProfile').and.callThrough();
      (<jasmine.Spy>component.cargarAvatar).and.callThrough();
      component.cargarAvatar();
      expect(avatarServiceStub.getUserProfile).toHaveBeenCalled();
    });
  });

  describe('uploadAvatar', () => {
    it('makes expected calls', () => {
      const loadingControllerStub: LoadingController = fixture.debugElement.injector.get(
        LoadingController
      );
      const avatarServiceStub: AvatarService = fixture.debugElement.injector.get(
        AvatarService
      );
      spyOn(component, 'alertPresent').and.callThrough();
      spyOn(loadingControllerStub, 'create').and.callThrough();
      spyOn(avatarServiceStub, 'uploadAvatar').and.callThrough();
      component.uploadAvatar();
      expect(component.alertPresent).toHaveBeenCalled();
      expect(loadingControllerStub.create).toHaveBeenCalled();
      expect(avatarServiceStub.uploadAvatar).toHaveBeenCalled();
    });
  });
});
