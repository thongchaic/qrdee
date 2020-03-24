import { TestBed } from '@angular/core/testing';

import { StoreLogisticService } from './store-logistic.service';

describe('StoreLogisticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreLogisticService = TestBed.get(StoreLogisticService);
    expect(service).toBeTruthy();
  });
});
