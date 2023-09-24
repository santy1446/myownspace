import { TestBed } from '@angular/core/testing';

import { GetUserNotesUseCase } from './get-user-notes.usecase';

describe('GetUserNotesUseCase', () => {
  let service: GetUserNotesUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserNotesUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
