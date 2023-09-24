import { TestBed } from '@angular/core/testing';

import { SigninUseCase } from './signin.usecase';

describe('SigninUseCase', () => {
  let service: SigninUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
