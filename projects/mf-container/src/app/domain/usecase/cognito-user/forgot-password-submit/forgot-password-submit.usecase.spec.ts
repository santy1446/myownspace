import { TestBed } from '@angular/core/testing';

import { ForgotPasswordSubmitUseCase } from './forgot-password-submit.usecase';

describe('ForgotPasswordSubmitUseCase', () => {
  let service: ForgotPasswordSubmitUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordSubmitUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
