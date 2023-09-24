import { Injectable } from '@angular/core';
import { NotesGateway } from '../../models/gateway/notes.gateway';
import { NoteService } from '../../models/notes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserNotesUseCase {

  constructor(private _notesGateway: NotesGateway) { }

  getUserNotes(): Observable <NoteService[]> {
    return this._notesGateway.getUserNotes();
  }

}
