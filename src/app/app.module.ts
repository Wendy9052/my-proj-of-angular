import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from "./auth/auth.module";
import { NoteModule } from "./note/note.module";
import { HobbyModule } from "./hobby/hobby.module";
import { CookModule } from "./cook/cook.module";

import { HomeComponent } from './home/home.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MainNavigationBarComponent } from './shared/main-navigation-bar/main-navigation-bar.component';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { IconDefinition } from '@ant-design/icons-angular';

import { 
  AccountBookFill, 
  AlertFill, 
  AlertOutline,
  AliwangwangOutline,
  FileOutline,
  UserOutline,
  LogoutOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ 
  AccountBookFill, 
  AlertOutline, 
  AlertFill,
  AliwangwangOutline,
  FileOutline,
  UserOutline,
  LogoutOutline
];


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthModule,
    NoteModule,
    HobbyModule,
    CookModule,
    NzLayoutModule,
    NzIconModule,
    NzDropDownModule,
    NzDividerModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
