import { Component, OnInit } from '@angular/core';

import { HobbyService } from "../hobby.service";

@Component({
  selector: 'app-aad-hobby',
  templateUrl: './aad-hobby.component.html',
  styleUrls: ['./aad-hobby.component.css']
})
export class AadHobbyComponent implements OnInit {

  isVisible = false;

  handleOk(): void {
    // TODO

    // console.log('Button ok clicked!');
    // this.isVisible = false;
    this.operate.closeAddHobby()
  }

  handleCancel(): void {
    // console.log('Button cancel clicked!');
    // this.isVisible = false;
    this.operate.closeAddHobby()
  }

  constructor(private operate:HobbyService) { }

  ngOnInit(): void {
    this.operate.addHobbyVisible.subscribe((visible) => {
      console.log('visible:',visible);
      this.isVisible = visible
    })
  }

}
