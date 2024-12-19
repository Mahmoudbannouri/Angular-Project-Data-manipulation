import { TestBed } from '@angular/core/testing';

import { ApartementsService } from './apartements.service';

describe('ApartementsService', () => {
  let service: ApartementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
