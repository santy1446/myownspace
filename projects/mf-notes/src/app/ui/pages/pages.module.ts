import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NotesComponent } from './notes/notes.component';
import { UiAnimatedContainerModule, UiNoteModule } from 'mos-design-system';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiAnimatedContainerModule,
    UiNoteModule

  ]
})
export class PagesModule { }
