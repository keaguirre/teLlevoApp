import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ViajesService } from 'src/app/services/viajes/viajes.service';
import { FormBuilder } from '@angular/forms';
import { AdminUsuariosService } from 'src/app/services/adminUsuarios/admin-usuarios.service';
import { FormsModule } from '@angular/forms';
import { ViajarConductorPage } from './viajar-conductor.page';

describe('ViajarConductorPage', () => {
  let component: ViajarConductorPage;
  let fixture: ComponentFixture<ViajarConductorPage>;

  beforeEach(() => {
    const alertControllerStub = () => ({});
    const viajesServiceStub = () => ({
      obtenerListadoSolicitudes: () => ({ then: () => ({}) })
    });
    const formBuilderStub = () => ({ group: object => ({}) });
    const adminUsuariosServiceStub = () => ({});
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ViajarConductorPage],
      providers: [
        { provide: AlertController, useFactory: alertControllerStub },
        { provide: ViajesService, useFactory: viajesServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: AdminUsuariosService, useFactory: adminUsuariosServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ViajarConductorPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`listadoSolicitudes has default value`, () => {
    expect(component.listadoSolicitudes).toEqual([]);
  });

  it(`page has default value`, () => {
    expect(component.page).toEqual(1);
  });

  it(`isModalOpen has default value`, () => {
    expect(component.isModalOpen).toEqual(false);
  });

  it(`listHidden has default value`, () => {
    expect(component.listHidden).toEqual(true);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'onForm').and.callThrough();
      component.ngOnInit();
      expect(component.onForm).toHaveBeenCalled();
    });
  });

  describe('onSolicitudList', () => {
    it('makes expected calls', () => {
      const viajesServiceStub: ViajesService = fixture.debugElement.injector.get(
        ViajesService
      );
      spyOn(viajesServiceStub, 'obtenerListadoSolicitudes').and.callThrough();
      component.onSolicitudList();
      expect(viajesServiceStub.obtenerListadoSolicitudes).toHaveBeenCalled();
    });
  });

  describe('onDisponible', () => {
    it('makes expected calls', () => {
      spyOn(component, 'onSolicitudList').and.callThrough();
      component.onDisponible();
      expect(component.onSolicitudList).toHaveBeenCalled();
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

  describe('ofertar', () => {
    it('makes expected calls', () => {
      spyOn(component, 'onLoadForm').and.callThrough();
      component.ofertar();
      expect(component.onLoadForm).toHaveBeenCalled();
    });
  });
});
