import { TestBed, inject } from '@angular/core/testing';

import { EvictionService } from './eviction.service';

describe('EvictionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvictionService]
    });
  });

  it('should be created', inject([EvictionService], (service: EvictionService) => {
    expect(service).toBeTruthy();
  }));
});
