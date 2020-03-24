import { TestBed } from '@angular/core/testing';

import { LoginStoreService } from './login-store.service';

describe('LoginStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginStoreService = TestBed.get(LoginStoreService);
    expect(service).toBeTruthy();
  });
});
