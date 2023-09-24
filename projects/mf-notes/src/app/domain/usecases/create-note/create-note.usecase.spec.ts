import { TestBed } from '@angular/core/testing';

import { CreateNoteUseCase } from './create-note.usecase';

describe('CreateNoteUseCase', () => {
  let service: CreateNoteUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNoteUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
