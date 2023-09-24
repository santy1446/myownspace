import { Injectable } from '@angular/core';
import { NotesGateway } from '../../models/gateway/notes.gateway';
import { NoteService } from '../../models/notes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateNoteUseCase {
  constructor(private _notesGateway: NotesGateway) { }

  createNote(note: NoteService): Observable<NoteService> {
    return this._notesGateway.createNote(note);
  }
}
