import { NoteData, UiLoaderComponent, UiModalComponent, UiToastComponent } from 'mos-design-system';
import { DeleteNoteUseCase } from '../../../domain/usecases/delete-note/delete-note.usecase';
import { GetUserNotesUseCase } from '../../../domain/usecases/get-user-notes/get-user-notes.usecase';
import { UpdateNoteUseCase } from '../../../domain/usecases/update-note/update-note.usecase';
import { CreateNoteUseCase } from './../../../domain/usecases/create-note/create-note.usecase';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NoteService } from '../../../domain/models/notes.model';
const TOAST_DURATION: number = 5000;

@Component({
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {

  @ViewChild('myLoader') myLoader: UiLoaderComponent = {} as any;
  @ViewChild('myToast') myToast: UiToastComponent = {} as any;
  @ViewChild('myModal') myModal: UiModalComponent = {} as any;
  notesList: NoteData[] = [];
  isCreating: boolean = false;
  noteToDelete: NoteData = {} as any;
  searchInput: string = "";

  constructor(
    private _createNoteUseCase: CreateNoteUseCase,
    private _updateNoteUseCase: UpdateNoteUseCase,
    private _getUserNotesUseCase: GetUserNotesUseCase,
    private _deleteNoteUseCase: DeleteNoteUseCase,
    private _cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.myLoader.showLoader();
    this._cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.getNotes();
  }

  /** ------------- GET NOTES ------------------------- */
  getNotes(): void {
    this._getUserNotesUseCase.getUserNotes().subscribe({
      next: (res: NoteService[]) => this.getNotesHandler(res),
      error: () => this.showErrorMessage()
    })
  }

  getNotesHandler(notes: NoteService[]): void {
    this.myLoader.hideLoader();
    this.notesList = notes.map((elm) => {
      return {
        id: elm.id,
        title: elm.title,
        body: elm.note_body
      }
    })
  }

  /** ------------- CREATE NOTE ------------------------- */

  onCreateNote(note: NoteData) {
    if (note.body && note.title) {
      this.myLoader.showLoader();
      const NOTE_TO_SAVE: NoteService = { title: note.title, note_body: note.body };
      this._createNoteUseCase.createNote(NOTE_TO_SAVE).subscribe({
        next: () => this.onCreateNoteHandler(),
        error: () => this.showErrorMessage()
      })
    }else{
      this.uncompleteNoteMessage();
    }

  }

  onCreateNoteHandler(): void {
    this.myToast.createNotification(
      'success',
      'The note was created',
      TOAST_DURATION
    );
    this.isCreating = false;
    this.getNotes();
  }

  /** ------------- UPDATE NOTE ------------------------- */

  onUpdateNote(note: NoteData) {
    if (note.body && note.title) {
      this.myLoader.showLoader();
      const NOTE_TO_UPDATE: NoteService = { id: note.id, title: note.title, note_body: note.body };
      this._updateNoteUseCase.updateNote(NOTE_TO_UPDATE).subscribe({
        next: () => this.onUpdateNoteHandler(),
        error: () => this.showErrorMessage()
      })
    }else{
      this.uncompleteNoteMessage();
      this.getNotes();
    }
  }

  onUpdateNoteHandler() {
    this.myLoader.hideLoader();
    this.myToast.createNotification(
      'success',
      'The note was updated',
      TOAST_DURATION
    );
  }

  /** --------------- DELETE NOTE ---------------------- */

  onDeleteNoteValidation(note: any) {
    this.noteToDelete = note;
    this.myModal.openModal();
  }

  onDeleteNote() {
    this.myLoader.showLoader();
    this._deleteNoteUseCase.deleteNote(this.noteToDelete.id!).subscribe({
      next: () => this.onDeleteNoteHandler(),
      error: () => this.showErrorMessage()
    })
  }

  onDeleteNoteHandler() {
    this.myLoader.hideLoader();
    const INDEX = this.notesList.findIndex(note => note.id === this.noteToDelete.id);
    this.notesList.splice(INDEX, 1);
    this.myModal.closeModal();
    this.myToast.createNotification(
      'success',
      'The note was deleted',
      TOAST_DURATION
    );
  }

  showErrorMessage(): void {
    this.myToast.createNotification(
      'error',
      'Something is wrong... Please try later',
      TOAST_DURATION
    );
  }

  uncompleteNoteMessage(): void {
    this.isCreating = false;
    this.myToast.createNotification(
      'info',
      'You cannot send empty data',
      TOAST_DURATION
    );
  }


}
