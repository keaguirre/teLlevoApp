import { TestBed } from '@angular/core/testing';
import { GeolocalizacionService } from './geolocalizacion.service';

describe('GeolocalizacionService', () => {
  let service: GeolocalizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [GeolocalizacionService] });
    service = TestBed.inject(GeolocalizacionService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
