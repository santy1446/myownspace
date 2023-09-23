import { Injectable } from '@angular/core';
import { NotesGateway } from '../../models/gateway/notes.gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteNoteUseCase {

  constructor(private _notesGateway: NotesGateway) { }

  deleteNote(id: string): Observable <any> {
    return this._notesGateway.deleteNote(id);
  } 
}
