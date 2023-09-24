import { Injectable } from '@angular/core';
import { NotesGateway } from '../../../domain/models/gateway/notes.gateway';
import { Observable, map } from 'rxjs';
import { NoteService } from '../../../domain/models/notes.model';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class NotesService extends NotesGateway {
  constructor(private _http: HttpClient) {
    super();
  }
  createNote(user: NoteService): Observable<NoteService> {
    return this._http.post<any>(environment.notesEndpoint, user);
  }
  updateNote(note: NoteService): Observable<any> {
    const params = {title: note.title, note_body: note.note_body}
    return this._http.put(`${environment.notesEndpoint}/${note.id}`, params);
  }
  getUserNotes(): Observable<NoteService[]> {
    return this._http.get<any>(environment.notesEndpoint).pipe(map (data=> data));
  }
  deleteNote(id: string): Observable<any> {
    return this._http.delete(`${environment.notesEndpoint}/${id}`)
  }
}
