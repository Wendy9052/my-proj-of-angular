import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ZoneComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ZoneModule { }
