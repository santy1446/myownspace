import { TestBed } from '@angular/core/testing';

import { UpdateNoteUseCase } from './update-note.usecase';

describe('UpdateNoteUseCase', () => {
  let service: UpdateNoteUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateNoteUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
