import { TestBed, inject } from '@angular/core/testing';

import { WeekResolver } from './week.resolver';

describe('WeekResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekResolver]
    });
  });

  it('should be created', inject([WeekResolver], (service: WeekResolver) => {
    expect(service).toBeTruthy();
  }));
});
