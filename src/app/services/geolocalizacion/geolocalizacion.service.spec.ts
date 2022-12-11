import { TestBed } from '@angular/core/testing';

import { GeolocalizacionService } from './geolocalizacion.service';

describe('GeolocalizacionService', () => {
  let service: GeolocalizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocalizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
