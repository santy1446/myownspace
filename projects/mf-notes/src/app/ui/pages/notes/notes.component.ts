import { DeleteNoteUseCase } from '../../../domain/usecases/delete-note/delete-note.usecase';
import { GetUserNotesUseCase } from '../../../domain/usecases/get-user-notes/get-user-notes.usecase';
import { UpdateNoteUseCase } from '../../../domain/usecases/update-note/update-note.usecase';
import { CreateNoteUseCase } from './../../../domain/usecases/create-note/create-note.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(
    private _createNoteUseCase: CreateNoteUseCase,
    private _updateNoteUseCase: UpdateNoteUseCase,
    private _getUserNotesUseCase: GetUserNotesUseCase,
    private _deleteNoteUseCase: DeleteNoteUseCase,
  ) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this._getUserNotesUseCase.getUserNotes().subscribe({
      next: (res) => console.log(res)
      
    })
  }


}
