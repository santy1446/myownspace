import { TestBed } from '@angular/core/testing';

import { SignupUseCase } from './signup.usecase';

describe('SignupUseCase', () => {
  let service: SignupUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
