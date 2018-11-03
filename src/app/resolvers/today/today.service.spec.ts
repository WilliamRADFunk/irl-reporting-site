import { TestBed, inject } from '@angular/core/testing';

import { TodayService } from './today.service';

describe('TodayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodayService]
    });
  });

  it('should be created', inject([TodayService], (service: TodayService) => {
    expect(service).toBeTruthy();
  }));
});
