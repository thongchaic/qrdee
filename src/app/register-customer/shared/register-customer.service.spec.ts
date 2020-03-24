import { TestBed } from '@angular/core/testing';

import { RegisterCustomerService } from './register-customer.service';

describe('RegisterCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterCustomerService = TestBed.get(RegisterCustomerService);
    expect(service).toBeTruthy();
  });
});
