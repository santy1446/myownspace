import { TestBed } from '@angular/core/testing';

import { DeleteNoteUseCase } from './delete-note.usecase';

describe('DeleteNoteUseCase', () => {
  let service: DeleteNoteUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteNoteUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
