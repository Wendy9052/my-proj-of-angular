import { Injectable } from '@angular/core';

// sessionstorage存储服务

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  // WFS
  private readonly TOKEN = 'token'

  getToken(): string {
    return sessionStorage.getItem(this.TOKEN) ?? '';
  }

  setToken(token: string): void {
    return sessionStorage.setItem(this.TOKEN, token)
  }

  constructor() { }
}
