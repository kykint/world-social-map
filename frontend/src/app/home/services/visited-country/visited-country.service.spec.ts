import { TestBed, inject } from '@angular/core/testing';

import { VisitedCountryService } from './visited-country.service';

describe('VisitedCountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitedCountryService]
    });
  });

  it('should be created', inject([VisitedCountryService], (service: VisitedCountryService) => {
    expect(service).toBeTruthy();
  }));
});
