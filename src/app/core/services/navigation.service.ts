import { Injectable } from '@angular/core';
import { 
  Router,
  NavigationEnd, //表示当导航成功结束时触发的事件。
  NavigationBehaviorOptions, //修改 Router 导航策略的选项。为 Router 导航功能提供包含任何这些属性的对象，以控制导航的处理方式。
  UrlTree, //代表已解析的url
} from "@angular/router";
import { Observable, Subject } from 'rxjs';

// 导航跳转服务

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // WFS
  private _navComplateSource = new Subject<{url:string | UrlTree , extra ?: NavigationBehaviorOptions}>()

  // WFS
  get navComplete(): Observable<{ url: string | UrlTree, extra ?: NavigationBehaviorOptions}> {
    return this._navComplateSource.asObservable()
  }

  // 跳转到登录页
  toLogin():void {
    this.toModuleByPath('login')
  }

  // 跳转到note页面
  toNote():void {
    this.toModuleByPath('note/read-note')
  }

  // 跳转到zone页面
  toZone():void {
    this.toModuleByPath('zone')
  }

  // 跳转到hobby页面
  toHobby():void {
    this.toModuleByPath('hobby')
  }

  // 跳转到cook页面
  toCook():void {
    this.toModuleByPath('cook')
  }

  // 通过path跳转
  private toModuleByPath(path:string): void {
    let url = this.addPrefixToPath(path)
    this.router.navigateByUrl(url)
  }

  // 给path加前缀
  private addPrefixToPath(path: string): string {
    let url = path
    if(!url.startsWith('/')) {
      url = `/${path}`
    }
    return url
  }

  constructor(private router:Router) { 
    // WFS
    this.router.events.subscribe(arg => {
      if(arg instanceof NavigationEnd) {
        this._navComplateSource.next({url: arg.url})
      }
    })
  }

  isNote(): boolean {
    return this.isModule('note')
  }

  isZone(): boolean {
    return this.isModule('zone')
  }

  isHobby(): boolean {
    return this.isModule('hobby')
  }

  isCook(): boolean {
    return this.isModule('cook')
  }


  // 判断模块路由是否激活
  // isActive()
  // false 的等价物是 {paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'ignored'} 。
  // true 的等效 IsActiveMatchOptions 是 {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'}
  private isModule(module: string): boolean {
    return this.router.isActive(module, {
      paths: 'subset', 
      queryParams: 'subset', 
      fragment: 'ignored', 
      matrixParams: 'ignored'
    })
  }
}
