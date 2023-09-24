import { TestBed } from '@angular/core/testing';

import { ForgotPasswordUseCase } from './forgot-password.usecase';

describe('ForgotPasswordUseCase', () => {
  let service: ForgotPasswordUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
