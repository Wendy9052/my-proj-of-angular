import { Injectable } from '@angular/core';
import { Observable,Subject } from "rxjs";

interface TabItem {
  url: string,
  tabName: string
}

interface MenuItem {
  if_close: boolean,
  menu_name: string,
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private _tabClickSource = new Subject<TabItem>()

  private _menuClickSource = new Subject<MenuItem>()

  get tabClicked$(): Observable<TabItem> {
    return this._tabClickSource.asObservable()
  }

  get menuClicked$(): Observable<MenuItem> {
    return this._menuClickSource.asObservable()
  }

  addTabItem(tabItem: TabItem) {
    this._tabClickSource.next(tabItem)
  }

  closeTabItem(menuItem:MenuItem) {
    this._menuClickSource.next(menuItem)
  }

  constructor() { }
}
