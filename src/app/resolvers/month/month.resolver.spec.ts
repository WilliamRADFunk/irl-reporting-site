import { TestBed, inject } from '@angular/core/testing';

import { MonthResolver } from './month.resolver';

describe('MonthResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthResolver]
    });
  });

  it('should be created', inject([MonthResolver], (service: MonthResolver) => {
    expect(service).toBeTruthy();
  }));
});
