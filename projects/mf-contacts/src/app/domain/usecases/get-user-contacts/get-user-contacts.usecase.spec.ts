import { TestBed } from '@angular/core/testing';

import { GetUserContactsUseCase } from './get-user-contacts.usecase';

describe('GetUserContactsUseCase', () => {
  let service: GetUserContactsUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserContactsUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
