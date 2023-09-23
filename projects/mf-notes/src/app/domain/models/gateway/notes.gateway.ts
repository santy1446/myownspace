import { Observable } from "rxjs";
import { NoteService } from "../notes.model";

export abstract class NotesGateway {
    abstract createNote(user : NoteService): Observable<NoteService>;
    abstract updateNote(user : NoteService): Observable<any>;
    abstract getUserNotes(): Observable<NoteService[]>;
    abstract deleteNote(id: string): Observable<any>;
}