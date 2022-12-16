import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor/conversor.service';
import { FormsModule } from '@angular/forms';
import { CoversorPage } from './coversor.page';

describe('CoversorPage', () => {
  let component: CoversorPage;
  let fixture: ComponentFixture<CoversorPage>;

  beforeEach(() => {
    const conversorServiceStub = () => ({
      getDolar: () => ({ subscribe: f => f({}) }),
      getYuro: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CoversorPage],
      providers: [
        { provide: ConversorService, useFactory: conversorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CoversorPage);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'loadDolar').and.callThrough();
      spyOn(component, 'loadYuro').and.callThrough();
      spyOn(component, 'convertDolarOne').and.callThrough();
      spyOn(component, 'convertDolarTwo').and.callThrough();
      spyOn(component, 'convertYuro1').and.callThrough();
      spyOn(component, 'convertYuro2').and.callThrough();
      component.ngOnInit();
      expect(component.loadDolar).toHaveBeenCalled();
      expect(component.loadYuro).toHaveBeenCalled();
      expect(component.convertDolarOne).toHaveBeenCalled();
      expect(component.convertDolarTwo).toHaveBeenCalled();
      expect(component.convertYuro1).toHaveBeenCalled();
      expect(component.convertYuro2).toHaveBeenCalled();
    });
  });

  describe('loadDolar', () => {
    it('makes expected calls', () => {
      const conversorServiceStub: ConversorService = fixture.debugElement.injector.get(
        ConversorService
      );
      spyOn(conversorServiceStub, 'getDolar').and.callThrough();
      component.loadDolar();
      expect(conversorServiceStub.getDolar).toHaveBeenCalled();
    });
  });

  describe('loadYuro', () => {
    it('makes expected calls', () => {
      const conversorServiceStub: ConversorService = fixture.debugElement.injector.get(
        ConversorService
      );
      spyOn(conversorServiceStub, 'getYuro').and.callThrough();
      component.loadYuro();
      expect(conversorServiceStub.getYuro).toHaveBeenCalled();
    });
  });
});
