import { TestBed } from '@angular/core/testing';

import { NotesInterceptor } from './notes.interceptor';

describe('NotesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NotesInterceptor = TestBed.inject(NotesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
