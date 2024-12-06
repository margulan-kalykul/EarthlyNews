import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../database/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'https://app.beeceptor.com';
  username: string = '';
  logged = false;
  constructor(private http: HttpClient) { }

  updateLogged(isLogged: boolean) {
    this.logged = isLogged;
  }

  getLogged(): boolean {
    return this.logged;
  }

  login(username: string, password: string): Observable<LoginResponse> {
    this.username = username;
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getUsername(): string{
    return this.username;
  }
}
