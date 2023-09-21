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
  updateNote(user: NoteService): Observable<any> {
    const params = {title: user.title, body: user.note_body}
    return this._http.put(`${environment.notesEndpoint}/${user.email_user_login}/${user.id}`, params);
  }
  getUserNotes(email: string): Observable<NoteService[]> {
    return this._http.get<any>(`${environment.notesEndpoint}/${email}`).pipe(map (data=> data));
  }
  deleteNote(id: string, email: string): Observable<any> {
    return this._http.delete(`${environment.notesEndpoint}/${email}/${id}`)
  }

  
}
