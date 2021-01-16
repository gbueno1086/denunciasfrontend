import { TestBed } from '@angular/core/testing';

import { EmitenteService } from './emitente.service';

describe('EmitenteService', () => {
  let service: EmitenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
