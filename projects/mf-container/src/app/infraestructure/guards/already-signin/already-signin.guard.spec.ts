import { TestBed } from '@angular/core/testing';

import { AlreadySigninGuard } from './already-signin.guard';

describe('AlreadySigninGuard', () => {
  let guard: AlreadySigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlreadySigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
