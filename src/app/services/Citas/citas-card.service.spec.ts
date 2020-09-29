import { TestBed } from '@angular/core/testing';

import { CitasCardService } from './citas-card.service';

describe('CitasCardService', () => {
  let service: CitasCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
