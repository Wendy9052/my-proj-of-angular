import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../../core/services/navigation.service";

import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-main-navigation-bar',
  templateUrl: './main-navigation-bar.component.html',
  styleUrls: ['./main-navigation-bar.component.css']
})
export class MainNavigationBarComponent implements OnInit {

  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];

  navActive:number = 1

  logout():void {
    this.nav.toLogin()
  }

  toNote():void {
    this.nav.toNote()
  }

  toZone():void {
    this.nav.toZone()
  }

  toHobby():void {
    this.nav.toHobby()
  }

  toCook():void {
    this.nav.toCook()
  }

  private updateActiveModule():void {
    if (this.nav.isNote()) {
      this.navActive = 1;
    } else if (this.nav.isZone()) {
      this.navActive = 2;
    } else if (this.nav.isHobby()) {
      this.navActive = 3;
    } else if (this.nav.isCook()) {
      this.navActive = 4;
    } else {
      this.navActive = 0;
    }
  }

  constructor(private nav:NavigationService) { }

  ngOnInit(): void {
    this.nav.navComplete.subscribe((e) => {
      console.log('e:', e);
      this.updateActiveModule()
      // TODO
    })
  }

}
