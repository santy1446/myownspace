import { Injectable } from '@angular/core';
import { NotesGateway } from '../../models/gateway/notes.gateway';
import { NoteService } from '../../models/notes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateNoteUseCase {

  constructor(private _notesGateway: NotesGateway) { }

  updateNote(note: NoteService): Observable <any> {
    return this._notesGateway.updateNote(note);
  }
}
