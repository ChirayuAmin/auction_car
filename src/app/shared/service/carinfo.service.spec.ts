import { TestBed, inject } from '@angular/core/testing';

import { CarinfoService } from './carinfo.service';

describe('CarinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarinfoService]
    });
  });

  it('should be created', inject([CarinfoService], (service: CarinfoService) => {
    expect(service).toBeTruthy();
  }));
});
