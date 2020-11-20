import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: HttpClient) { }

  login(credentials: User): Observable<any>{
    return this.http.post(environment.urlApi + "login", credentials)
  }

  register(credentials: User) {
    return this.http.post(environment.urlApi + "register", credentials)
  }
}
