import { TestBed } from '@angular/core/testing';

import { MultipurposeService } from './multipurpose.service';

describe('MultipurposeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipurposeService = TestBed.get(MultipurposeService);
    expect(service).toBeTruthy();
  });
});
