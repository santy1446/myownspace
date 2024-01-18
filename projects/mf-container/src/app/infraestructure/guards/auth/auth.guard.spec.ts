import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true when canActive is called', async () => {
    const spy = spyOn(guard["_cognitoUserCommonService"], "getUser").and.callFake(() => of(null));

    const result = await guard.canActivate();

    setTimeout(() => {
      expect(spy).toHaveBeenCalled();
      expect(result).toBeTruthy();
    }, 300);
    
  });
});
