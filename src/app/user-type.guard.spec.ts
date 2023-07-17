import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userTypeGuard } from './user-type.guard';

describe('userTypeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userTypeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
