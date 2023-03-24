import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookComponent } from './cook/cook.component';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { CookEditAddComponent } from './cook-edit-add/cook-edit-add.component';


@NgModule({
  declarations: [
    CookComponent,
    CookEditAddComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    HttpClientModule,
    NzCascaderModule,
  ]
})
export class CookModule { }
