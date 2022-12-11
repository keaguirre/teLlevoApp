import { TestBed } from '@angular/core/testing';

import { ViajesService } from './viajes.service';

describe('ViajesService', () => {
  let service: ViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
