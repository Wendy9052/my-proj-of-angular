import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// import { NzTableModule } from 'ng-zorro-antd/table';
// import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzFormModule} from 'ng-zorro-antd/form';

import { NzIconModule } from 'ng-zorro-antd/icon';


// ...


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    // NzTableModule,
    // NzButtonModule,
    // NzTableModule,
    // NzModalModule,
    NzButtonModule,
    // NzFormModule,
    // NzInputModule,
    NzLayoutModule,
    NzIconModule,
  ]
})
export class AuthModule { }
