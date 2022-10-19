import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { ReadingNoteComponent } from './reading-note/reading-note.component';

import { RouterModule } from '@angular/router';
import { MovieNoteComponent } from './movie-note/movie-note.component';



@NgModule({
  declarations: [
    NoteComponent,
    ReadingNoteComponent,
    MovieNoteComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzSwitchModule,
    NzLayoutModule,
    NzIconModule,
    RouterModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzTabsModule
  ],
  exports: [
    RouterModule
  ]
})
export class NoteModule { }
