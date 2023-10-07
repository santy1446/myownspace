import { TestBed } from '@angular/core/testing';

import { DeleteContactUseCase } from './delete-contact.usecase';

describe('DeleteContactUseCase', () => {
  let service: DeleteContactUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteContactUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
