import { TestBed } from '@angular/core/testing';

import { CreateContactUseCase } from './create-contact.usecase';

describe('CreateContactUseCase', () => {
  let service: CreateContactUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateContactUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
