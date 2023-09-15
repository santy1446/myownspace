import { TestBed } from '@angular/core/testing';

import { GetUserUseCase } from './get-user.usecase';

describe('GetUserUseCase', () => {
  let service: GetUserUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
