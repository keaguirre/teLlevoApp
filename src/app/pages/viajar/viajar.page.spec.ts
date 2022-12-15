import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { ViajesService } from 'src/app/services/viajes/viajes.service';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { ViajarPage } from './viajar.page';

describe('ViajarPage', () => {
  let component: ViajarPage;
  let fixture: ComponentFixture<ViajarPage>;

  beforeEach(() => {
    const loadingControllerStub = () => ({});
    const toastControllerStub = () => ({
      create: object => ({}),
      present: () => ({})
    });
    const formBuilderStub = () => ({ group: object => ({}) });
    const viajesServiceStub = () => ({
      deleteSolicitud: usr_solicitud => ({}),
      createSolicitud: value => ({}),
      obtenerSolicitud: arg => ({ then: () => ({}) }),
      updateSolicitud: (arg, value) => ({})
    });
    const adminUsuariosServiceStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ViajarPage],
      providers: [
        { provide: LoadingController, useFactory: loadingControllerStub },
        { provide: ToastController, useFactory: toastControllerStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: ViajesService, useFactory: viajesServiceStub },
        { provide: AdminUsuariosService, useFactory: adminUsuariosServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ViajarPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isModalOpen has default value`, () => {
    expect(component.isModalOpen).toEqual(false);
  });

  it(`cancelTrip has default value`, () => {
    expect(component.cancelTrip).toEqual(false);
  });

  it(`comunas has default value`, () => {
    expect(component.comunas).toEqual([, , ,]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'onForm').and.callThrough();
      component.ngOnInit();
      expect(component.onForm).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      const viajesServiceStub: ViajesService = fixture.debugElement.injector.get(
        ViajesService
      );
      spyOn(viajesServiceStub, 'deleteSolicitud').and.callThrough();
      component.ngOnDestroy();
      expect(viajesServiceStub.deleteSolicitud).toHaveBeenCalled();
    });
  });

  describe('onQuehue', () => {
    it('makes expected calls', () => {
      const viajesServiceStub: ViajesService = fixture.debugElement.injector.get(
        ViajesService
      );
      spyOn(component, 'onInterval').and.callThrough();
      spyOn(component, 'presentToast').and.callThrough();
      spyOn(viajesServiceStub, 'createSolicitud').and.callThrough();
      component.onQuehue();
      expect(component.onInterval).toHaveBeenCalled();
      expect(component.presentToast).toHaveBeenCalled();
      expect(viajesServiceStub.createSolicitud).toHaveBeenCalled();
    });
  });

  describe('presentToast', () => {
    it('makes expected calls', () => {
      const toastControllerStub: ToastController = fixture.debugElement.injector.get(
        ToastController
      );
      spyOn(toastControllerStub, 'create').and.callThrough();

      component.presentToast();
      expect(toastControllerStub.create).toHaveBeenCalled();

    });
  });

  describe('onForm', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.onForm();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('onLoadSolicitud', () => {
    it('makes expected calls', () => {
      const viajesServiceStub: ViajesService = fixture.debugElement.injector.get(
        ViajesService
      );
      spyOn(component, 'onUpdateSolicitud').and.callThrough();
      spyOn(viajesServiceStub, 'obtenerSolicitud').and.callThrough();
      component.onLoadSolicitud();
      expect(component.onUpdateSolicitud).toHaveBeenCalled();
      expect(viajesServiceStub.obtenerSolicitud).toHaveBeenCalled();
    });
  });

  describe('onUpdateSolicitud', () => {
    it('makes expected calls', () => {
      const viajesServiceStub: ViajesService = fixture.debugElement.injector.get(
        ViajesService
      );
      spyOn(component, 'setOpen').and.callThrough();
      spyOn(viajesServiceStub, 'updateSolicitud').and.callThrough();
      component.onUpdateSolicitud();
      expect(component.setOpen).toHaveBeenCalled();
      expect(viajesServiceStub.updateSolicitud).toHaveBeenCalled();
    });
  });

  describe('onCancelTrip', () => {
    it('makes expected calls', () => {
      const viajesServiceStub: ViajesService = fixture.debugElement.injector.get(
        ViajesService
      );
      spyOn(viajesServiceStub, 'deleteSolicitud').and.callThrough();
      component.onCancelTrip();
      expect(viajesServiceStub.deleteSolicitud).toHaveBeenCalled();
    });
  });
});
