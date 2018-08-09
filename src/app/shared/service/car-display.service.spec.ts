import { TestBed, inject } from '@angular/core/testing';

import { CarDisplayService } from './car-display.service';

describe('CarDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarDisplayService]
    });
  });

  it('should be created', inject([CarDisplayService], (service: CarDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
