import { TestBed } from '@angular/core/testing';

import { CompararPrecosService } from './comparar-precos.service';

describe('CompararPrecosService', () => {
  let service: CompararPrecosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompararPrecosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
