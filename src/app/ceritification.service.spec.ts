import { TestBed } from '@angular/core/testing';

import { CeritificationService } from './ceritification.service';

describe('CeritificationService', () => {
  let service: CeritificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeritificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
