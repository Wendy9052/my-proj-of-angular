import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { StorageService } from "../../core/services/storage.service";
import { NavigationService } from "../../core/services/navigation.service";

import { fabric } from "fabric";

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  private canvas!: fabric.Canvas;

  private initFabric(): void {
    this.canvas = new fabric.Canvas('fabricCanvas', {
      selection: true,
      width: 300,
      height: 200,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      selectionBorderColor: 'rgb(255, 255, 255)',
      selectionColor: 'rgba(255, 255, 255, 0.15)',
      backgroundColor: '#28272C'
    });
  }

  doLogin(): void {
    this.storage.setToken('20221010')
    this.submitForm()
  }

  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      console.log('校验通过');
      this.nav.toNote()
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          console.log('校验未通过');
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder, private storage:StorageService, private nav:NavigationService) { }

  ngOnInit(): void {
    this.initFabric();
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
