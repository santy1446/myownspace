import { TestBed } from '@angular/core/testing';

import { UpdateContactUseCase } from './update-contact.usecase';

describe('UpdateContactUseCase', () => {
  let service: UpdateContactUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateContactUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
