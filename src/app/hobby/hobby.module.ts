import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HobbyComponent } from './hobby/hobby.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AadHobbyComponent } from './hobby/aad-hobby/aad-hobby.component';



@NgModule({
  declarations: [
    HobbyComponent,
    AadHobbyComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class HobbyModule { }
