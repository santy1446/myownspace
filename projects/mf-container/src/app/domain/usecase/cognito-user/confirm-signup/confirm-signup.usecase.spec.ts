import { TestBed } from '@angular/core/testing';

import { ConfirmSignupUseCase } from './confirm-signup.usecase';

describe('ConfirmSignupUseCase', () => {
  let service: ConfirmSignupUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmSignupUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
