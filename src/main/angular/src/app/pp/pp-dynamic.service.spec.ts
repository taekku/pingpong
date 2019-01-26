import { TestBed } from '@angular/core/testing';

import { PpDynamicService } from './pp-dynamic.service';

describe('PpDynamicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PpDynamicService = TestBed.get(PpDynamicService);
    expect(service).toBeTruthy();
  });
});
