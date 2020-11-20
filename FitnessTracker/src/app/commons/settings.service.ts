import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  removeToken() {
    localStorage.removeItem('access_token');
  }
  constructor() { }

  setToken(token: string): void{
    localStorage.setItem('access_token', token);
  }

  getToken(): string{
    return localStorage.getItem('access_token');
  }
}
