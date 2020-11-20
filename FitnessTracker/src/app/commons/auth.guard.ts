import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable() 
export class AuthGuard implements CanActivate {

  constructor(private authService: SettingsService,
              private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state.url + " " + this.authService.getToken())
      if(state.url=="/register" && this.authService.getToken()==null)
      return true;
      if(state.url=="/login" && this.authService.getToken()==null)
        return true;
      if((state.url=="/auth/login" || state.url=="/auth/register") && this.authService.getToken()==null)
        return true;
      if(state.url=="/dashboard" && this.authService.getToken()!=null)
        return true;

      if((state.url=="/auth/login" || state.url=="/auth/register") && this.authService.getToken()!=null)
        this.router.navigate(['/dashboard']);

      if(state.url=="/dashboard" && this.authService.getToken()==null)
        this.router.navigate(['/login']);
      return false;
  }

  
  
}
