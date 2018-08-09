import { TestBed, inject } from '@angular/core/testing';

import { DeploymentsettingService } from './deploymentsetting.service';

describe('DeploymentsettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeploymentsettingService]
    });
  });

  it('should be created', inject([DeploymentsettingService], (service: DeploymentsettingService) => {
    expect(service).toBeTruthy();
  }));
});
