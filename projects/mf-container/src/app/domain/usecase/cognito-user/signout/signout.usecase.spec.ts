import { TestBed } from '@angular/core/testing';

import { SignoutUseCase } from './signout.usecase';

describe('SignoutUseCase', () => {
  let service: SignoutUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignoutUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
