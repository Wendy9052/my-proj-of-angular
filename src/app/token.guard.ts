import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// 导入storage服务
import { StorageService } from "./core/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // WFS
      const token = this.storage.getToken()
      if(token === null || token === '') {
        this.router.createUrlTree(['/login'])
      }
    return true;
  }
  
  constructor(private storage:StorageService, private router:Router) {}
}
