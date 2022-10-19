import { Component, OnInit } from '@angular/core';
import { NoteService } from "../note.service";
import * as keys from "../../shared/tabs/tab-item-key";
import * as MenuUrl from "../../shared/menu/menu-url-key";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  tabs:string[] = [];

  baseUrl = '/note'

  Keys = keys

  MenuUrl = MenuUrl

  selectedMenu:string = keys.ReadingNotes

  initTab= {url:MenuUrl.ReadingNotes,tabName: keys.ReadingNotes}

  constructor(private noteService:NoteService, private router:Router) {
    // 设置路由监听
    this.router.events.subscribe(event => { 
      if(event instanceof NavigationEnd){
        console.log('event', event);
      }    
    })
  }

  ngOnInit(): void {
    this.router.navigateByUrl(`${this.baseUrl}/${this.initTab.url}`)
    this.addTab(this.initTab.tabName)
    this.noteService.tabClicked$.subscribe(tab => {
      console.log('tab:', tab);
      if(tab) {
        this.addTab(tab.tabName)
        this.selectedMenu = tab.tabName
        // this.router.navigateByUrl(`${this.baseUrl}/${tab.url}`)
      }
    })
    this.noteService.menuClicked$.subscribe(info => {
      console.log('取消选中菜单', info);
      if(!info.if_close){
        this.selectedMenu = ''
      }else {
        this.selectedMenu = info.menu_name
      }
    })
  }

  selected(menu: string): boolean {
    return this.selectedMenu === menu
  }

  onSelected(url: string, tabName: string): void {
    this.noteService.addTabItem({url,tabName})
    // this.router.navigateByUrl(`${this.baseUrl}/${url}`)
    // console.log('跳转的url:', `${this.baseUrl}/${url}`);
  }

  
  selectedIndex = 0;

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
    // 如果当前打开的页面为0，则左侧菜单栏的选中也取消
    if(this.tabs.length === 0) {
      const closeItem = {
        if_close: false,
        menu_name: this.selectedMenu,
      }
      this.noteService.closeTabItem(closeItem)
      this.router.createUrlTree([`${this.baseUrl}`])
    }else {
      this.selectedMenu = this.tabs[index - 1 < 0 ? 0: index - 1]
      const closeItem = {
        if_close: true,
        menu_name: this.selectedMenu,
      }
      this.noteService.closeTabItem(closeItem)
    }
  }

  addTab(tabName: string) {
    // 若已存在，则不添加，直接选中已存在的tab
    if(this.tabs.includes(tabName)){
      const index = this.tabs.indexOf(tabName)
      console.log('tab已存在');
      this.onSelectedChanged(index)
      this.selectedIndex = index;
    }else {
      console.log('tab不存在');
      this.tabs.push(tabName)
      this.selectedIndex = this.tabs.length;
    }
  }

  onSelectedChanged(index: number):void {
    this.selectedIndex = index
    this.selectedMenu = this.tabs[index]
    console.log('selectedIndex:', this.selectedIndex);
    console.log('Keys:', this.Keys);
    // this.router.navigateByUrl(`${this.baseUrl}/${url}`)
    for (const [key, value] of Object.entries(this.Keys)) {
      console.log(`${key}: ${value}`);
      if(this.selectedMenu === value){
        for(const [menu, url] of Object.entries(this.MenuUrl)){
          if(menu === key){
            this.router.navigateByUrl(`${this.baseUrl}/${url}`)
          }
        }
      }
    }
  }
}
