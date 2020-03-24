import { TestBed } from '@angular/core/testing';

import { SellStatsService } from './sell-stats.service';

describe('SellStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellStatsService = TestBed.get(SellStatsService);
    expect(service).toBeTruthy();
  });
});
