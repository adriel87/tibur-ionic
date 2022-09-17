import { TestBed } from '@angular/core/testing';

import { CosaService } from './cosa.service';

describe('CosaService', () => {
  let service: CosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
