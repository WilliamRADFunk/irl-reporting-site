import { TestBed, inject } from '@angular/core/testing';

import { TodayResolver } from './today.resolver';

describe('TodayResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodayResolver]
    });
  });

  it('should be created', inject([TodayResolver], (service: TodayResolver) => {
    expect(service).toBeTruthy();
  }));
});
