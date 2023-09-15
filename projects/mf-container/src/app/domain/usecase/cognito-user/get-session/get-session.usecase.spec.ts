import { TestBed } from '@angular/core/testing';

import { GetSessionUseCase } from './get-session.usecase';

describe('GetSessionUseCase', () => {
  let service: GetSessionUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSessionUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
