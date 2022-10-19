import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface DialogControl {
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})

export class HobbyService {

  private _addHobbyChangeSource = new Subject<boolean>()

  // WFS
  get addHobbyVisible(): Observable<boolean> {
    return this._addHobbyChangeSource.asObservable()
  }

  showAddHobby(): void {
    console.log('调用showAddHobby');
    this._addHobbyChangeSource.next(true)
  }

  closeAddHobby(): void {
    this._addHobbyChangeSource.next(false)
  }

  // shouldUpdateHobby(): void {
  // }

  constructor() { }
}
