import { TestBed } from '@angular/core/testing';

import { RegisterLogisticService } from './register-logistic.service';

describe('RegisterLogisticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterLogisticService = TestBed.get(RegisterLogisticService);
    expect(service).toBeTruthy();
  });
});
