import { TestBed } from '@angular/core/testing';

import { UpDownServiceService } from './up-down-service.service';

describe('UpDownServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpDownServiceService = TestBed.get(UpDownServiceService);
    expect(service).toBeTruthy();
  });
});
